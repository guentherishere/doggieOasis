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
var AddressCtrl = require('./controllers/AddressCtrl');
var DaycareCtrl = require('./controllers/DaycareCtrl');
var GroomingCtrl = require('./controllers/GroomingCtrl');
var SpaCtrl = require('./controllers/SpaCtrl');
var DaycareRatesCtrl = require('./controllers/DaycareRatesCtrl');
var RatingCtrl = require('./controllers/RatingCtrl');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Endpoints
//Ops commented out and left in place in case of future need
// app.post('/api/welcome', WelcomeCtrl.create);
app.get('/api/welcome', WelcomeCtrl.read);
app.put('/api/welcome/:id', WelcomeCtrl.update);
// app.delete('/api/welcome/:id', WelcomeCtrl.delete);

// app.post('/api/address', AddressCtrl.create);
app.get('/api/address', AddressCtrl.read);
app.put('/api/address/:id', AddressCtrl.update);
// app.delete('/api/address/:id', AddressCtrl.delete);

// app.post('/api/daycare', DaycareCtrl.create);
app.get(':80/api/daycare', DaycareCtrl.read);
app.put(':80/api/daycare/:id', DaycareCtrl.update);
// app.delete('/api/daycare/:id', DaycareCtrl.delete);

// app.post('/api/grooming', GroomingCtrl.create);
app.get(':80/api/grooming', GroomingCtrl.read);
app.put(':80/api/grooming/:id', GroomingCtrl.update);
// app.delete('/api/grooming/:id', GroomingCtrl.delete);

app.post(':80/api/product', ProductCtrl.create);
app.get(':80/api/product', ProductCtrl.read);
app.put(':80/api/product/:id', ProductCtrl.update);
app.delete(':80/api/product/:id', ProductCtrl.delete);

app.post(':80/api/rating', RatingCtrl.create);
app.get(':80/api/rating', RatingCtrl.read);
app.put(':80/api/rating/:id', RatingCtrl.update);
app.delete(':80/api/rating/:id', RatingCtrl.delete);

app.post(':80/api/spa', SpaCtrl.create);
app.get(':80/api/spa', SpaCtrl.read);
app.put(':80/api/spa/:id', SpaCtrl.update);
app.delete(':80/api/spa/:id', SpaCtrl.delete);

app.post(':80/api/daycareRates', DaycareRatesCtrl.create);
app.get(':80/api/daycareRates', DaycareRatesCtrl.read);
app.put(':80/api/daycareRates/:id', DaycareRatesCtrl.update);
app.delete(':80/api/daycareRates/:id', DaycareRatesCtrl.delete);

app.post(':80/api/users', UserCtrl.create);
app.get(':80/api/users', UserCtrl.read);
app.put(':80/api/users/:id', UserCtrl.update);
app.delete(':80/api/users/:id', UserCtrl.delete);

// app.post('/api/orders', OrderCtrl.create);
// app.get('/api/orders', OrderCtrl.read);
// app.put('/api/orders/:id', OrderCtrl.update);
// app.delete('/api/orders/:id', OrderCtrl.delete);

//API connection

var port = 80;
var mongoUri = 'mongodb://localhost:27017/DoggieOasis';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function () {
  console.log("listening on port " + port);
});
