var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server, {safe: false});

db.open(function(err, db) {
	if(!err) {
		console.log('Connected to "winedb" database! Yeah!');
		db.collection('wines', {strict: true}, function(err, collection) {
			console.log('The wines collection doesnt exist. creating it with sample data');
			// populateDB();
		});
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
	console.log(req.body);
	res.send({'error':'An error has occurred'});
}

// populates database
var populateDB = function() {
	var wines = [{
        name: 'CHATEAU DE SAINT COSME',
        year: '2009',
        grapes: 'Grenache / Syrah',
        country: 'France',
        region: 'Southern Rhone',
        description: 'The aromas of fruit and spice...',
        picture: 'saint_cosme.jpg'
    },
    {
        name: 'LAN RIOJA CRIANZA',
        year: '2006',
        grapes: 'Tempranillo',
        country: 'Spain',
        region: 'Rioja',
        description: 'A resurgence of interest in boutique vineyards...',
        picture: 'lan_rioja.jpg'
	}];

	db.collection('wines', function(err, collection) {
		collection.insert(wines);
	});
};