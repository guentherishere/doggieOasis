//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');


//Controllers
var WelcomeCtrl = require('./controllers/WelcomeCtrl');
var ProductCtrl = require('./controllers/ProductCtrl');
var UserCtrl = require('./controllers/UserCtrl');
var OrderCtrl = require('./controllers/OrderCtrl');
var AddressCtrl = require('./controllers/AddressCtrl');
var DaycareCtrl = require('./controllers/DaycareCtrl');
var GroomingCtrl = require('./controllers/GroomingCtrl');
var SpaCtrl = require('./controllers/SpaCtrl');
var DaycareRatesCtrl = require('./controllers/DaycareRatesCtrl');
var CartCtrl = require('./controllers/CartCtrl');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Endpoints
// app.post('/api/welcome', WelcomeCtrl.create);
app.get('/api/welcome', WelcomeCtrl.read);
app.put('/api/welcome/:id', WelcomeCtrl.update);
// app.delete('/api/welcome/:id', WelcomeCtrl.delete);

// app.post('/api/address', AddressCtrl.create);
app.get('/api/address', AddressCtrl.read);
app.put('/api/address/:id', AddressCtrl.update);
// app.delete('/api/address/:id', AddressCtrl.delete);

// app.post('/api/daycare', DaycareCtrl.create);
app.get('/api/daycare', DaycareCtrl.read);
app.put('/api/daycare/:id', DaycareCtrl.update);
// app.delete('/api/daycare/:id', DaycareCtrl.delete);

// app.post('/api/grooming', GroomingCtrl.create);
app.get('/api/grooming', GroomingCtrl.read);
app.put('/api/grooming/:id', GroomingCtrl.update);
// app.delete('/api/grooming/:id', GroomingCtrl.delete);

app.post('/api/product', ProductCtrl.create);
app.get('/api/product', ProductCtrl.read);
app.put('/api/product/:id', ProductCtrl.update);
app.delete('/api/product/:id', ProductCtrl.delete);

app.post('/api/cart', CartCtrl.create);
app.get('/api/cart', CartCtrl.read);
app.put('/api/cart/:id', CartCtrl.update);
app.delete('/api/cart/:id', CartCtrl.delete);

app.post('/api/spa', SpaCtrl.create);
app.get('/api/spa', SpaCtrl.read);
app.put('/api/spa/:id', SpaCtrl.update);
app.delete('/api/spa/:id', SpaCtrl.delete);

app.post('/api/daycareRates', DaycareRatesCtrl.create);
app.get('/api/daycareRates', DaycareRatesCtrl.read);
app.put('/api/daycareRates/:id', DaycareRatesCtrl.update);
app.delete('/api/daycareRates/:id', DaycareRatesCtrl.delete);

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
