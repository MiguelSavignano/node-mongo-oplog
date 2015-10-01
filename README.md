# MongoOpLog - NodeJS Service
## Configuration
### Enable your mongo for use Oplog

Just go to your mongod.conf file find the replSet, uncoment it and Restart mongo
```
sudo service mongod restart
```
run mongo and initialize
```
mongo
rs.initiate()
```
### Dot Env Files

Put environment variables in .env
 
If you want to hear event for any collection 
```
var oplog = MongoOplog(config.mongo_uri);
```
