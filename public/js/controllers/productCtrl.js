app.controller('productCtrl', function ($scope, cartData, productData, ngCart, $routeParams, $location) {
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
        Materialize.toast('Added successfully', 1000);
      }, function (err){
        Materialize.toast('There was an error', 1000);
      });
    }
  };

  $scope.deleteProduct = function (product) {
    console.log(product);
    productData.deleteProductData(product).then(function (response) {
      getProducts();
      Materialize.toast('Deleted successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.updateProduct = function (product) {
    productData.updateProductData(product).then(function (response) {
      getProducts();
      $location.path('/store');
      Materialize.toast('Updated successfully', 1000);
    }, function(err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.addNewCart = function (product) {
    cartData.addCartData($scope.product).then(function (response) {
      getCart();
      console.log(product);
      $location.path('/store');
      Materialize.toast('Added successfully', 1000);
    }, function(err) {
      Materialize.toast('There was an error', 1000);
    });
  };

});
