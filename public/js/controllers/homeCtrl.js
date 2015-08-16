app.controller('homeCtrl', function ($scope, productData) {

  var getProducts = function () {
    productData.getProductData().then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  };
  getProducts();

});
