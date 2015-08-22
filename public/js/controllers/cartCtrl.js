app.controller('cartCtrl', function ($scope, cartData, $routeParams, $location) {
  var getCart = function () {
    cartData.getCartData().then(function (response) {
      $scope.carts = response;
    });
  };
  getCart();

  var getCartEdit = function () {
    cartData.getCartData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.cart = response[i];
          console.log($scope.cart);
        }
      }
    });
  };
  getCartEdit();

  $scope.addNewCart = function (isValid) {
    if (isValid) {
      cartData.addCartData($scope.cart).then(function (response) {
        getCart();
        $location.path('/store');
      });
    }
  };

  $scope.deleteCart = function (cart) {
    console.log(cart);
    cartData.deleteCartData(cart).then(function (response) {
      getCart();
    });
  };

  $scope.updateCart = function (cart) {
    cartData.updateCartData(cart).then(function (response) {
      getCart();
      $location.path('/store');
    });
  };

});
