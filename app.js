require('dotenv').load();

var colors     = require('colors'),
    MongoOplog = require('mongo-oplog')

var config = require('./config')

var options = {
  ns: config.mongo.dbname+"."+config.mongo_collection
};
var oplog = MongoOplog(config.mongo_uri,options);
oplog.tail(function(){
  console.log('tailing started'.green);
})

oplog.on('op', function (data) {
  //whatever event
  // console.log(data);
});

oplog.on('insert', function (doc) {
  console.log('insert event'.yellow);
  console.log("database.collection: ".cyan);
  console.log(doc.ns);
  console.log("insert query: ".cyan);
  console.log(doc.o);
});

oplog.on('update', function (doc) {
  console.log('update event'.yellow)
  console.log("database.collection: ".cyan);
  console.log(doc.ns); 
  console.log("find query".cyan);
  console.log(doc.o2);
  console.log("update query: ".cyan)
  console.log(doc.o);
});

oplog.on('delete', function (doc) {
  console.log(doc); 
  console.log('delete event'.yellow)
  console.log("database.collection: ".cyan);
  console.log(doc.ns); 
  console.log("remove query _id".cyan);
  console.log(doc.o); 
});

oplog.on('error', function (error) {
  console.log('error event'.red);
  console.log(error);
});

oplog.on('end', function () {
  console.log('end event');
  console.log('Stream ended');
});

