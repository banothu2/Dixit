var DatabaseInstance = require('./DatabaseInstance'),
	db = DatabaseInstance.instance,
	ObjectID = DatabaseInstance.ObjectID;
var Room = exports.Room = function(){
}
db.bind('Room');

var next = 0;

Room.findById = function (id,callback){
	if(typeof(id) != 'ObjectID')
		id = ObjectID.createFromHexString(id);
	db.Room.findOne({'_id':id},callback);

};
Room.find = function(query,callback){
	db.Room.find(query).toArray(callback);
};
Room.get = function(query,callback){
	db.Room.findOne(query,callback);
};
Room.create = function(data,callback){
	var dbData = {};
	//dbData["_id"] = next++;
	dbData["currentPlayerNumber"] = 0;
	dbData["maximumPlayerNumber"] = data.maximumPlayerNumber;
	dbData["status"] = 0;
	dbData.creatorId = data.creatorId;
	if(typeof(dbData.creatorId) == 'string')
		dbData.creatorId = new ObjectID(dbData.creatorId);
	db.Room.insert(dbData,{saft:true},function(err,items){
		callback(err,items[0]);
	});
};
Room.updateById = function(id,data,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.Room.updateById(id,data,{safe:true},callback);
};
Room.deleteById = function(id,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.Room.removeById(id,{safe:true},callback);
};

Room.deleteByCreatorId = function(userId,callback){
	if(typeof(userId) == 'string')
		userId = ObjectID.createFromHexString(userId);
	db.Room.remove({"creatorId":userId},{safe:true},callback);
}
