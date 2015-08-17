//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//Controllers
var WelcomeCtrl = require('./controllers/WelcomeCtrl');
var ProductCtrl = require('./controllers/ProductCtrl');
var UserCtrl = require('./controllers/UserCtrl');
var OrderCtrl = require('./controllers/OrderCtrl');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Endpoints
app.post('/api/welcome', WelcomeCtrl.create);
app.get('/api/welcome', WelcomeCtrl.read);
app.put('/api/welcome/:id', WelcomeCtrl.update);
app.delete('/api/welcome/:id', WelcomeCtrl.delete);

app.post('/api/product', ProductCtrl.create);
app.get('/api/product', ProductCtrl.read);
app.put('/api/product/:id', ProductCtrl.update);
app.delete('/api/product/:id', ProductCtrl.delete);

app.post('/api/users', UserCtrl.create);
app.get('/api/users', UserCtrl.read);
app.put('/api/users/:id', UserCtrl.update);
app.delete('/api/users/:id', UserCtrl.delete);

app.post('/api/orders', OrderCtrl.create);
app.get('/api/orders', OrderCtrl.read);
app.put('/api/orders/:id', OrderCtrl.update);
app.delete('/api/orders/:id', OrderCtrl.delete);

//API connection
var port = 1337;
var mongoUri = 'mongodb://localhost:27017/DoggieOasis';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function () {
  console.log("listening on port " + port);
});
