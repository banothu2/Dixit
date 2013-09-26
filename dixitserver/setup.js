var fs = require('fs')
	,config = require('./config')
	,swig = require('swig')
	;

/* for models */
var MODEL_TEMPLATE = "\
var DatabaseInstance = require('./DatabaseInstance'),\n\
	db = DatabaseInstance.instance,\n\
	ObjectID = DatabaseInstance.ObjectID;\n\
var {{ modelName }} = exports.{{ modelName }} = function(){\n\
}\n\
db.bind('{{ modelName }}');\n\
{{ modelName }}.findById = function (id,callback){\n\
	if(typeof(id) != 'ObjectId')\n\
		id = new ObjectId(id);\n\
	db.{{ modelName }}.find({'_id':id},callback);\n\
};\n\
{{ modelName }}.find = function(query,callback){\n\
	db.{{ modelName }}.find(query,callback);\n\
};\n\
{{ modelName }}.get = function(query,callback){\n\
	db.{{ modelName }}.findOne(query,callback);\n\
};\n\
{{modelName}}.create = function(data,callback){\n\
	db.{{modelName}}.insert(data,{saft:true},callback);\n\
};\n\
{{modelName}}.updateById = function(id,data,callback){\n\
	if(typeof(id) != 'ObjectId')\n\
		id = new ObjectId(id);\n\
	db.{{modelName}}.updateById(id,data,{safe:true},callback);\n\
};\n\
{{modelName}}.deleteById = function(id,callback){\n\
	if(typeof(id) != 'ObjectId')\n\
		id = new ObjectId(id);\n\
	db.{{modelName}}.removeById(id,{safe:true},callback);\n\
};";

if(!fs.existsSync('/models/')){
	fs.mkdirSync('/models');
	fs.writeFileSync(
'/models/DatabaseInstance.js',"\n\
var config = require('../config'),\n\
mongo = require('mongoskin'),\n\
db = mongo.db(config.db.url,{safe:true});\n\
exports.instance = db;\n\
exports.ObjectId = mongo.ObjectId;");
}

var forceClean = true;
if(config.models){
	for(var i = 0;i < config.models.length;i++){
		var name = config.models[i];
		if(!fs.existsSync('/models/' + name + ".js") || forceClean){
			var template = swig.compile(MODEL_TEMPLATE);
			var string = template({modelName:name});
			//console.log(string);
			var fileName = './models/' + name + ".js";
			console.log(fileName);
			fs.writeFileSync(fileName,string);
		}
	}
}