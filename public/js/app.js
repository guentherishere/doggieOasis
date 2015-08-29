var app = angular.module('doggieOasis', ['ngRoute', 'firebase', 'ngCart']);

app.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
    templateUrl: "templates/home.html",
    controller: "welcomeCtrl"
  })

  .when('/contact', {
    templateUrl: "templates/contact.html",
    controller: "contactCtrl"
  })

  .when('/editAddress/:id', {
    templateUrl: "templates/editAddress.html",
    controller: "contactCtrl"
  })

  .when('/cart/', {
    templateUrl: "templates/cart.html"
  })

  .when('/editSpa/:id', {
    templateUrl: "templates/editSpa.html",
    controller: "spaCtrl"
  })

  .when('/store', {
    templateUrl: "templates/store.html",
    controller: "productCtrl"
  })

  .when('/spa', {
    templateUrl: "templates/spa.html",
    controller: "spaCtrl"
  })

  .when('/daycareRates', {
    templateUrl: "templates/daycareRates.html",
    controller: "daycareRatesCtrl"
  })

  .when('/editProduct/:id', {
    templateUrl: "templates/editProduct.html",
    controller: "productCtrl"
  })

  .when('/editWelcome/:id', {
    templateUrl: "templates/editWelcome.html",
    controller: "welcomeCtrl"
  })

  .when('/editDaycareHours/:id', {
    templateUrl: "templates/editDaycareHours.html",
    controller: "contactCtrl"
  })

  .when('/editDaycarePackages/:id', {
    templateUrl: "templates/editDaycarePackages.html",
    controller: "daycareRatesCtrl"
  })

  .when('/editGroomingHours/:id', {
    templateUrl: "templates/editGroomingHours.html",
    controller: "contactCtrl"
  })

  .when('/addProduct', {
    templateUrl: "templates/addProduct.html",
    controller: "productCtrl"
  })

  .when('/addSpa', {
    templateUrl: "templates/addSpa.html",
    controller: "spaCtrl"
  })

  .when('/login', {
    templateUrl: "templates/login.html",
    controller: "loginCtrl"
  })

  .when('/addDaycarePackage', {
    templateUrl: "templates/addDaycarePackages.html",
    controller: "daycareRatesCtrl"
  })

  .otherwise({
    redirectTo: '/'
  });

});
