var app = angular.module('doggieOasis', ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
    templateUrl: "templates/home.html",
    controller: "homeCtrl"
  })

  .when('/admin', {
    templateUrl: "templates/admin.html",
    controller: "adminCtrl"
  })

  .when('/add', {
    templateUrl: "templates/addProduct.html",
    controller: "adminCtrl"
  })

  .when('/edit/:id', {
    templateUrl: "templates/editProduct.html",
    controller: "editCtrl"
  })

  .when('/contact', {
    templateUrl: "templates/contact.html",
  })

  .when('/retail', {
    templateUrl: "templates/retail.html",
  })

  .when('/spa', {
    templateUrl: "templates/spa.html",
  })

  .when('/daycare', {
    templateUrl: "templates/daycare.html",
  })

  .otherwise({
    redirectTo: '/'
  });

});
