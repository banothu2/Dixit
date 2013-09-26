var User = require('../models/User').User,
    Room = require('../models/Room').Room,
    InterUserRoom = require('../models/InterUserRoom').InterUserRoom,
    async = require('async')
    , SessionStore = require('../models/SessionStore').SessionStore
    ;

function _clearRecords(userId, callback){
	InterUserRoom.deleteByUserId(userId,function(err){
		Room.deleteByCreatorId(userId, function(err){
			callback(err);
		});
	});
}

function _findPlayerListByRoomId(roomId, callback){
	InterUserRoom.find({"roomId":roomId}, function(err,items){
		async.map(items, function(item, mapCallback){
			User.findById(item.userId, function(err,user){
				mapCallback(err,user);
			});
		},function(err,users){
			callback(err,users);
		});
	});
}
function _setSessionField(socketId,field,value,callback){
	SessionStore.get(socketId,function(err,item){
		var session = item || {};
		session[field] = value;
		SessionStore.set(socketId,session,callback);
	});
}
function _setSession(socketId, session, callback){

}
function _getSession(socketId, callback){
	SessionStore.get(socketId,callback);
}
var SocketController = exports.SocketController = function(sk){
	this.socket = sk;
};

SocketController.prototype.userLogIn = function(data, callback){
	var self = this;
	User.find({"link_facebook":data.id},function(err,users){
		console.log(users);
		if(users.length <= 0){
			//Create a new one
			data.link_facebook = data.id;
			delete data.id;
			User.create(data,function(err,item){
				console.log(item);
				var socketId = self.socket.id;
				_setSessionField(socketId,'user',item, function(err){
					self.socket.emit('login', item);
				});
			});
		}else if(users.length == 1){
			console.log(self.socket.id);
			_setSessionField(self.socket.id,'user',users[0], function(err){
				self.socket.emit('login',users[0]);
			});
		}else{
			//Error
			console.log("Error===========================");
		}
		
	});
}
SocketController.prototype.createRoom = function(data){
	var self = this;
	_getSession(self.socket.id, function(err,session){
		if(!session){
			console.log("NO SESSION");
			return;
		}
		var user = session["user"];
		if(user){
			data.creatorId = user._id;
			Room.create(data,function(err,room){
				console.log(room);
				User.findById(room.creatorId,function(err,user){
					room.creator = user;
					InterUserRoom.userJoinRoom(user._id, room._id, function(err){
						_findPlayerListByRoomId(room._id,function(err,users){
							room.playerList = users;
							self.socket.emit('create_room',room);
						});
					});
				});
			});
		}
	});
}

SocketController.prototype.joinRoom = function(roomId){
	var self = this;
	_getSession(self.socket.id, function(err,session){
		if(!session){
			console.log("NO SESSION");
			return;
		}
		console.log(roomId);
		var user = session["user"];
		if(user){
			InterUserRoom.userJoinRoom(user._id,roomId,function(err){
				Room.findById(roomId, function(err, room){
					User.findById(room.creatorId, function(err,user){
						room.creator = user;
						_findPlayerListByRoomId(room._id, function(err,users){
							room.playerList = users;
							self.socket.emit('join',room);
						});
					});
				});
			});
		}else{

		}
	});
}

SocketController.prototype.leaveRoom = function(roomId){
	var self = this;
	_getSession(self.socket.id, function(err,session){
		if(!session){
			console.log("NO SESSION");
			return;
		}
		var user = session["user"];
		if(user){
			InterUserRoom.userLeaveRoom(user._id,roomId, function(err){
				Room.findById(roomId,function(err,room){
					if(room.creatorId == user._id){
						Room.deleteById(roomId,function(err){});
					}
					self.socket.emit('leave');	
				});
			});
		}else{

		}
	});
}
SocketController.prototype.room = function(roomId){
	var self = this;
	Room.findById(roomId,function(err,room){
		User.findById(room.creatorId, function(err,user){
			room.creator = user;
			_findPlayerListByRoomId(room._id, function(err,users){
				room.playerList = users;
				console.log(users.length);
				self.socket.emit('room',room);	
			})
		});
	});
}


SocketController.prototype.rooms = function(){
	var self = this;
	Room.find({},function(err,rooms){
		console.log(rooms);
		async.map(rooms, function(room,mapCallback){
			User.findById(room.creatorId, function(err,user){
				room.creator = user;
				_findPlayerListByRoomId(room._id, function(err,users){
					room.playerList = users;
					mapCallback(err,room);	
				})
			});
		},function(err,mappedRooms){
			self.socket.emit('rooms',mappedRooms);
		});
	});
}

var nextRoomId=0;
function RoomInfo(roomNo,storyteller,numOfPlayer,playerList){
	this.roomNo = roomNo;
	this.numOfPlayer = numOfPlayer;
	this.storyteller = storyteller;
	this.playerList = playerList;
	this.story = '';
	this.hand = genPic(numOfPlayer);
	this.cards = {}; // {cardID : submitUserID}
	this.vote = {}; // {voterID : cardID}
	this.answer = 0; // The correct answer (cardID) for this turn
	this.submitted = 0;
	this.voted = 0;
	this.status = 0; //0 for pending for story, 1 for pending to choosing, 2 for pending for vote
}
var ongoingGames = {};

SocketController.prototype.startGame = function(roomId){
	var self = this;
	_getSession(self.socket.id,function(err,session){
		if(!session){
			return;
		}
		Room.findById(roomId,function(err,room){
			_findPlayerListByRoomId(room._id,function(err,players){
				var storyteller = players[Math.round(Math.random() * (players.length - 1))]._id;
				var roomInfo = new RoomInfo(roomId,storyteller,players.length,players);
				ongoingGames[roomId] = roomInfo;
				self.socket.broadcast.emit('start',{"roomId":roomId,"storyteller":storyteller});
				self.socket.emit('start',{"roomId":roomId,"storyteller":storyteller});
				// transfer the storyteller
				/*
				var index;
				for(var i=0;i<ongoingGames[roomId].playerList.length;i++){
					if( (ongoingGames[roomId].playerList[i]._id.toHexString()) == ongoingGames[roomId].storyteller ){
						index = i;
						break;
					}
				}
				index = (index+1) % ongoingGames[roomId].playerList.length;
				ongoingGames[roomId].storyteller = ongoingGames[roomId].playerList[index]._id;*/
			});
		});
	});
	
}

SocketController.prototype.takeCard = function(roomId){
	var self = this;
	var hand = ongoingGames[roomId].hand.pop();
	self.socket.emit('cards',hand);
}

SocketController.prototype.tellStory = function(roomId,cardId,story,callback){
	var self = this;
	if(ongoingGames[roomId].status == 0){
		_getSession(self.socket.id,function(err,session){
			if(!session){
				return;
			}
			var dic = {};
			//TODO: Detect dulplicated choose
			dic.cardId = cardId;
			dic.userId = session.user._id;
			ongoingGames[roomId].cards[cardId] = session.user._id;//(dic);
			ongoingGames[roomId].submitted++;
			ongoingGames[roomId].story = story;
			ongoingGames[roomId].answer = cardId;
			self.socket.broadcast.emit('choose',story);
			self.socket.emit('choose',story);
			ongoingGames[roomId].status = 1;
		});
	}
}

SocketController.prototype.userChooseCard = function(roomId, picId){
	var self = this;
	_getSession(self.socket.id,function(err,session){
		if(!session){
			return;
		}
		var userId = session.user._id;
		
		if(ongoingGames[roomId].cards[picId] == null){
			ongoingGames[roomId].cards[picId] = userId;//(dic);
			ongoingGames[roomId].submitted++;
			
			if(ongoingGames[roomId].submitted < ongoingGames[roomId].numOfPlayer){
				//Do nothing
			}else{
				var cardsToBeVote = [];
				//Fill cards
				for(var c in ongoingGames[roomId].cards){
					cardsToBeVote.push(c);
				}
				self.socket.broadcast.emit('vote', cardsToBeVote);
				self.socket.emit('vote',cardsToBeVote);
				ongoingGames[roomId].status = 2;
			}
			console.log(ongoingGames[roomId]);
		}
	});
}

SocketController.prototype.userVote = function(roomId,cardId, callback){
	var self = this;
	_getSession(self.socket.id,function(err,session){
		if(!session){
			return;
		}
		var userId = session.user._id;
		var roomInfo = ongoingGames[roomId];
		
		if(ongoingGames[roomId].vote[session.user._id] == null){
		
			ongoingGames[roomId].vote[session.user._id] = cardId;
			ongoingGames[roomId].voted++;
			if(ongoingGames[roomId].voted < ongoingGames[roomId].numOfPlayer - 1)
				return;
			//query the results
			console.log(ongoingGames[roomId]);
			var finalResult = {};
			for(var i = 0;i < ongoingGames[roomId].playerList.length;i++){
				var player = ongoingGames[roomId].playerList[i];
				finalResult[player._id] = {
					"name": player.name,
					"score":0
				};
			}
			var voteResult = {};
			var ans = ongoingGames[roomId].answer; // Answer for this turn
			for (voterId in ongoingGames[roomId].vote){
				if(voteResult[ongoingGames[roomId].vote[voterId]]){
					voteResult[ongoingGames[roomId].vote[voterId]]++;
				}else{
					voteResult[ongoingGames[roomId].vote[voterId]] = 1;
				}
			};
			if( !voteResult[ans] || voteResult[ans] == roomInfo.playerList.length - 1){
				// All / no players get the answer
				async.forEach(roomInfo.playerList, function(player,foreachCallback){
					if(player._id.toHexString() == roomInfo.storyteller)
						return foreachCallback(null);
					User.findById(player._id, function(err,user){
						user.credits += 2;
						finalResult[user._id].score += 2;
						User.updateById(user._id, user, function(err){
							foreachCallback(err);
						});
					});
				},function(err){
					var arrayResult = [];
					for(field in finalResult){
						arrayResult.push(finalResult[field]);
					}
					self.socket.emit('result',arrayResult);
					self.socket.broadcast.emit('result',arrayResult);
				});
			}
			else{
				// Some players get the answer
				User.findById(roomInfo.storyteller, function(err,user){
					user.credits += 3;
					User.updateById(roomInfo.storyteller,user, function(err){
						var voteResult = [];
						for(field in roomInfo.vote){
							voteResult.push({
								"voterID":field,
								"cardID": roomInfo.vote[field]
							});
						}
						async.forEach(voteResult, function(voteItem, foreachCallback){
							if(voteItem.cardID = ans){
								finalResult[voteItem.voterID].score += 3;
								User.addCreditById(voteItem.voterID, 3, foreachCallback);
							}else{
								finalResult[roomInfo.cards[voteItem.cardID]].score += 1;
								User.addCreditById(roomInfo.cards[voteItem.cardID],1, foreachCallback);
							}
						},function(err){
							var arrayResult = [];
							for(field in finalResult){
								arrayResult.push(finalResult[field]);
							}
							self.socket.emit('result',arrayResult);
							self.socket.broadcast.emit('result',arrayResult);
						});
					});
				});
			}
		}	
	});
}

function genPic(numOfPlayer){
//return an array of arrays, where each array stands for the cards assigned to a player
//[ [1,2,3,4], [5,7,8,9],... ]
	var totalNoOfPictures = 40;
	var arr = [];
	for(var i=0;i<totalNoOfPictures;i++) arr.push(i);
	arr = shuffle(arr);
	var output = [];
	var index = 0;
	for(var i=0;i<numOfPlayer;i++){
		var hand = [];
		for (var j=0;j<6;j++){
			hand.push(arr[index]);
			index++;
		}
		output.push(hand);
	}
	return output;
}

shuffle = function(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

/*
function count(array,element){
	counter = 0;
	for(var e in array){
		if(e.equals(element))	counter++;
	}
	return counter;
}

SocketController.prototype.allVote = function(roomId){
	while(ongoingGames[roomId].voted < ongoingGames[roomId].numOfPlayers){};
	//query the results
	var voteResult = [];
	var ans = ongoingGames[roomId].answer; // Answer for this turn
	for (var player in ongoingGames[roomId].vote){
		voteResult.push(ongoingGames[roomId].vote[player]);
	};
	if( (count(voteResult,ans) == 0) || (count(voteResult,ans) == ongoingGames[roomId].numOfPlayer-1)){
		// All / no players get the answer
		for(var userId in ongoingGames[roomId].playerList){
			var score;
			User.find({userId: userId},function(err,player){
				score = player.score;
			})
			User.updateById(userId,score,function(err,player){
				player.score = score + 2;
			})
		}
	}
	else{
		// Some players get the answer
			User.updateById(ongoingGames[roomId].storyteller,score,function(err,storyteller){
				storyteller.score = score + 3;
			}
		for(var i = 0;i < ongoingGames[roomId].vote.length;i++){

			var currentChoice = ongoingGames[roomId].vote[i];
			if(currentChoice == ans){
				User.updateById(player,score,function(err,player){
					player.score = score + 3;
				}
			}
			else{
				var scorer = ongoingGames[roomId].cards[currentChoice];
				User.updateById(scorer,score,function(err,player){
					player.score = score + 1;
				}
			}
		}
	}
	
	self.socket.emit('showResult',result);
	//Transfer the storyteller
	
}*/