var mongo ={
	host:     process.env.MONGO_HOST  ,
	port:     process.env.MONGO_PORT  ,
	dbname:   process.env.MONGO_DBNAME,
	login:    process.env.MONGO_USER  ,
	password: process.env.MONGO_PASS
}
var mongo_uri = ['mongodb://',mongo.host,':',mongo.port,'/', mongo.dbname].join('');
exports.mongo = mongo;
exports.mongo_uri = mongo_uri;
exports.mongo_collection = process.env.MONGO_COLLECTION
