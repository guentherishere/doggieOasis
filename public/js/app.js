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

  .otherwise({
    redirectTo: '/'
  });

});
