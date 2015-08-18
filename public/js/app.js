var app = angular.module('doggieOasis', ['ngRoute']);

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
    controller: "editAddressCtrl"
  })

  .when('/editSpa/:id', {
    templateUrl: "templates/editSpa.html",
    controller: "editSpaCtrl"
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
    controller: "editProductCtrl"
  })

  .when('/editWelcome/:id', {
    templateUrl: "templates/editWelcome.html",
    controller: "editWelcomeCtrl"
  })

  .when('/editDaycareHours/:id', {
    templateUrl: "templates/editDaycareHours.html",
    controller: "editDaycareHoursCtrl"
  })

  .when('/editDaycarePackages/:id', {
    templateUrl: "templates/editDaycarePackages.html",
    controller: "editDaycarePackagesCtrl"
  })

  .when('/editGroomingHours/:id', {
    templateUrl: "templates/editGroomingHours.html",
    controller: "editGroomingHoursCtrl"
  })

  .when('/addProduct', {
    templateUrl: "templates/addProduct.html",
    controller: "productCtrl"
  })

  .when('/addSpa', {
    templateUrl: "templates/addSpa.html",
    controller: "spaCtrl"
  })

  .when('/addDaycarePackage', {
    templateUrl: "templates/addDaycarePackages.html",
    controller: "daycareRatesCtrl"
  })

  .otherwise({
    redirectTo: '/'
  });

});
