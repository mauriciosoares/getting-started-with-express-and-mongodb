var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server, {safe: false});

db.open(function(err, db) {
	if(!err) {
		console.log('Connected to "winedb" database! Yeah!');
	} else {
		console.log('error wines');
	}
});

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('retrieving wine ' + id);
	db.collection('wines', function(err, collection) {
		collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
		});
	});
};

exports.findAll = function(req, res) {
	db.collection('wines', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items)
		});
	})
};

exports.addWine = function(req, res) {
	var wine = req.body;

	db.collection('wines', function(err, collection) {
		collection.insert(wine, {safe: true}, function(err, result) {
			if(err) {
				res.send({error: 'An error has occurred'});
			} else {
				console.log('success');
				res.send(result[0]);
			}
		});
	});
};

exports.updateWine = function(req, res) {
	var id = req.params.id;
	var wine = req.body;
	console.log('updating wine ' + id);

	db.collection('wines', function(err, collection) {
		collection.update({'_id': new BSON.ObjectID(id)}, wine, {safe: true}, function(err, result) {
			if(err) {
				console.log('error');
				res.send({'error': 'erro'});
			} else {
				console.log('ok!');
				res.send(wine);
			}
		});
	});
};

exports.deleteWine = function(req, res) {
	var id = req.params.id;
	console.log('deleting')

	db.collection('wines', function(err, collection) {
		collection.remove({'_id': new BSON.ObjectID(id)}, {safe: true}, function(err, result) {
			if(err) {
				res.send({error: 'error!'});
			} else {
				console.log('deleted!');
				res.send('deleted!');
			}
		});
	});
};