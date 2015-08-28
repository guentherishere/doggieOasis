//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var flash = require('connect-flash');

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
app.use(expressSession({
  secret: 'TOPSYKRETS'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

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

// app.post('/api/users', UserCtrl.create);
app.get('/api/users', UserCtrl.read);
app.put('/api/users/:id', UserCtrl.update);
app.delete('/api/users/:id', UserCtrl.delete);

app.post('/api/orders', OrderCtrl.create);
app.get('/api/orders', OrderCtrl.read);
app.put('/api/orders/:id', OrderCtrl.update);
app.delete('/api/orders/:id', OrderCtrl.delete);

// Passport serializing and deserializing User instances
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Passport Login from Docs
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

// Passport login
passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    // check in mongo if a user with username exists or not
    User.findOne({
        'username': username
      },
      function (err, user) {
        // In case of any error, return using the done method
        if (err)
          return done(err);
        // Username does not exist, log error & redirect back
        if (!user) {
          console.log('User Not Found with username ' + username);
          return done(null, false,
            req.flash('message', 'User Not found.'));
        }
        // User exists but wrong password, log the error
        if (!isValidPassword(user, password)) {
          console.log('Invalid Password');
          return done(null, false,
            req.flash('message', 'Invalid Password'));
        }
        // User and password both match, return user from
        // done method which will be treated like success
        return done(null, user);
      }
    );
  }));

// Passport registration
passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    findOrCreateUser = function () {
      // find a user in Mongo with provided username
      User.findOne({
        'username': username
      }, function (err, user) {
        // In case of any error return
        if (err) {
          console.log('Error in SignUp: ' + err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false,
            req.flash('message', 'User Already Exists'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = req.param('email');
          newUser.firstName = req.param('firstName');
          newUser.lastName = req.param('lastName');

          // save the user
          newUser.save(function (err) {
            if (err) {
              console.log('Error in Saving user: ' + err);
              throw err;
            }
            console.log('User Registration succesful');
            return done(null, newUser);
          });
        }
      });
    };

    // Delay the execution of findOrCreateUser and execute
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  }));

// Generates hash using bCrypt
var createHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

// Checks to make sure password i valid
var isValidPassword = function (user, password) {
  return bCrypt.compareSync(password, user.password);
};

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
