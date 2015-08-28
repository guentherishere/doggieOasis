app.controller('cartCtrl', function ($scope, cartData, productData, $routeParams, $location) {
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

  // $scope.addNewCart = function (isValid) {
  //   if (isValid) {
  //     cartData.addCartData($scope.cart).then(function (response) {
  //       console.log("hi");
  //       getCart();
  //       $location.path('/store');
  //     });
  //   }
  // };

  $scope.deleteCart = function (cart) {
    console.log(cart);
    cartData.deleteCartData(cart).then(function (response) {
      getCart();
      Materialize.toast('Deleted successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.updateCart = function (cart) {
    cartData.updateCartData(cart).then(function (response) {
      getCart();
      $location.path('/store');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

});
