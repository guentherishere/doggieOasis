app.controller('productCtrl', function ($scope, productData, $routeParams, $location) {
  var getProducts = function () {
    productData.getProductData().then(function (response) {
      $scope.products = response;
    });
  };
  getProducts();

  var getProductsEdit = function () {
    productData.getProductData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.product = response[i];
          console.log($scope.product);
        }
      }
    });
  };
  getProductsEdit();

  $scope.addNewProduct = function (isValid) {
    if (isValid) {
      productData.addProductData($scope.product).then(function (response) {
        getProducts();
        $location.path('/store');
      });
    }
  };

  $scope.deleteProduct = function (product) {
    console.log(product);
    productData.deleteProductData(product).then(function (response) {
      getProducts();
    });
  };

  $scope.updateProduct = function (product) {
    productData.updateProductData(product).then(function (response) {
      getProducts();
      $location.path('/store');
    });
  };

});
