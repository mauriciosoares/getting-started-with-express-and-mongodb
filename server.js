// modules
var express = require('express');
var wines = require('./routes/wines.js');

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');cd 


var app = express();

app.use(express.bodyParser());
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});
app.get('/wines', wines.findAll);
app.get('/wine/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);

app.listen(1234);
console.log('listening to http://localhost:1234')