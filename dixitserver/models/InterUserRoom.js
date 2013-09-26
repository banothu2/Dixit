var DatabaseInstance = require('./DatabaseInstance'),
	db = DatabaseInstance.instance,
	ObjectID = DatabaseInstance.ObjectID;
var InterUserRoom = exports.InterUserRoom = function(){
}
db.bind('InterUserRoom');
InterUserRoom.findById = function (id,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.InterUserRoom.find({'_id':id},callback);
};
InterUserRoom.find = function(query,callback){
	db.InterUserRoom.find(query).toArray(callback);
};
InterUserRoom.get = function(query,callback){
	db.InterUserRoom.findOne(query,callback);
};
InterUserRoom.create = function(data,callback){
	data.status = 0;
	if(typeof(data.userId) == 'string')
		data.userId = ObjectID.createFromHexString(data.userId);
	if(typeof(data.roomId) == 'string')
		data.roomId = ObjectID.createFromHexString(data.roomId);
	db.InterUserRoom.insert(data,{saft:true},callback);
};
InterUserRoom.updateById = function(id,data,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.InterUserRoom.updateById(id,data,{safe:true},callback);
};
InterUserRoom.deleteById = function(id,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.InterUserRoom.removeById(id,{safe:true},callback);
};
InterUserRoom.deleteByUserId = function(userId, callback){
	if(typeof(userId) == 'string')
		userId = ObjectID.createFromHexString(userId);
	db.InterUserRoom.remove({"userId":userId},{safe:true},callback);
}

InterUserRoom.userJoinRoom = function(userId,roomId,callback){
	if(typeof(userId) == 'string')
		userId = ObjectID.createFromHexString(userId);
	if(typeof(roomId) == 'string')
		roomId = ObjectID.createFromHexString(roomId);
	db.InterUserRoom.update({"userId":userId},{"userId":userId,"roomId":roomId,status:0},{upsert:true,safe:true},callback);
}

InterUserRoom.userLeaveRoom = function(userId,roomId,callback){
	if(typeof(userId) == 'string')
		userId = ObjectID.createFromHexString(userId);
	if(typeof(roomId) == 'string')
		roomId = ObjectID.createFromHexString(roomId);
	db.InterUserRoom.remove({"userId":userId,"roomId":roomId},{safe:true},callback);
}