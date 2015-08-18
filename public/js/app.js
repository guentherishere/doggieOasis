var app = angular.module('doggieOasis', ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
    templateUrl: "templates/home.html",
    controller: "welcomeCtrl"
  })

  .when('/admin', {
    templateUrl: "templates/admin.html",
    controller: "adminCtrl"
  })

  .when('/addProduct', {
    templateUrl: "templates/addProduct.html",
    controller: "adminCtrl"
  })

  .when('/editProduct/:id', {
    templateUrl: "templates/editProduct.html",
    controller: "editProductCtrl"
  })

  .when('/editWelcome/:id', {
    templateUrl: "templates/editWelcome.html",
    controller: "editWelcomeCtrl"
  })

  .when('/contact', {
    templateUrl: "templates/contact.html",
    controller: "contactCtrl"
  })

  .when('/editAddress/:id', {
    templateUrl: "templates/editAddress.html",
    controller: "editAddressCtrl"
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

  .otherwise({
    redirectTo: '/'
  });

});
