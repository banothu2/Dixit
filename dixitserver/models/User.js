var DatabaseInstance = require('./DatabaseInstance'),
	db = DatabaseInstance.instance,
	ObjectID = DatabaseInstance.ObjectID;


var User = exports.User = function(){
}
db.bind('User');
User.findById = function (id,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.User.findOne({'_id':id},callback);
};
User.find = function(query,callback){
	db.User.find(query).toArray(callback);
};
User.get = function(query,callback){
	db.User.findOne(query,callback);
};
User.create = function(data,callback){
	data.credits = 0;
	db.User.insert(data,{saft:true},function(err,users){
		callback(err,users[0]);
	});
};
User.updateById = function(id,data,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.User.updateById(id,data,{safe:true},callback);
};
User.deleteById = function(id,callback){
	if(typeof(id) == 'string')
		id = ObjectID.createFromHexString(id);
	db.User.removeById(id,{safe:true},callback);
};
User.addCreditById = function(id, increment, callback){
	User.findById(id, function(err,user){
		user.credits += increment;
		User.updateById(id, user,callback);
	});
}