var app = require('express')()
  , express = require('express')
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , SocketSession = require('./controllers/SocketController').SocketController
  , parseCookie = require('connect').utils.parseCookie
  , MemoryStore = require('./models/SessionStore').SessionStore  //require('connect/lib/middleware/session')
  ;

app.get('/', function(req,res){
  res.json({"headers":"world"});
});

io.sockets.on('connection', function (socket) {
  var session = new SocketSession(socket);
  socket.on('login', function (data) {
    console.log('login request----------------------');
    data = JSON.parse(data);
    session.userLogIn(data);
  });
  socket.on('rooms', function (){
    session.rooms();
  });
  socket.on('room', function(roomId){
    session.room(roomId);
  });
  socket.on('create_room',function(data){
  	data = JSON.parse(data);
  	session.createRoom(data);
  });
  
  socket.on('join',function(roomId){
    session.joinRoom(roomId);
  });
  
  socket.on('leave',function(roomId){
	console.log('------Leaving-------');
	session.leaveRoom(roomId);
  });
  
  socket.on('choose',function(roomId, picId){
  	session.userChooseCard(roomId,picId);
  });
  socket.on('start', function(roomId){
    session.startGame(roomId);
  });
  socket.on('tell',function(roomId,cardId,story){
	 session.tellStory(roomId,cardId,story);
  });
  socket.on('cards',function(roomId){
	 session.takeCard(roomId);
  });
  
  socket.on('vote',function(roomId,picId){
  	session.userVote(roomId,picId);
  });
  
});


server.listen(3000);