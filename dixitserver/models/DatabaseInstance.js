var config = require('../config'),
	mongo = require('mongoskin'),
	db = mongo.db(config.db.url,{safe:true});

exports.instance = db;
exports.ObjectID = mongo.ObjectID;