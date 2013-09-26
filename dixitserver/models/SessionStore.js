//var MemoryStore = require('connect/lib/middleware/session/memory');
var DatabaseInstance = require('./DatabaseInstance'),
	db = DatabaseInstance.instance,
	ObjectID = DatabaseInstance.ObjectID;

var MemoryStore = function(opt){
	for(field in opt)
		this[field] = opt[field];
};
db.bind('MemoryStore');
//建立一个memory store的实例
var storeMemory = new MemoryStore({
    reapInterval: 60000 * 10
  });

exports.SessionStore = storeMemory;
MemoryStore.prototype.get = function(key, callback){
	db.MemoryStore.findOne({"key":key},function(err,item){
		if(item)
			callback(err,item.value);
		else
			callback(err,null);
	});
}

MemoryStore.prototype.set = function(key,item,callback){
	db.MemoryStore.update({"key":key},{$set:{"value":item}},{upsert:true},callback);
}