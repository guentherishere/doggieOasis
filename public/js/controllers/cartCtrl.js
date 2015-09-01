app.controller('cartCtrl', function ($scope, cartData, productData, $routeParams, $location) {

  //authentication check
  var ref = new Firebase('https://doggieoasis.firebaseio.com/');

  var auth = new FirebaseSimpleLogin(ref, function (error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    }
    // no user logged in
    else if (user === null) {
      console.log("Not logged in");
    }
    // normal user logged in
    else if (user.id !== "47f0b82b-59f2-4cae-8bfe-ecb438eb0032") {
      console.log("You are logged in as normal user");
    }
    // admin logged in
    else {
      console.log("Logged in as admin");
      $scope.$evalAsync(function () {
        $scope.loggedin = true;
      });
    }
    // $scope.$apply();
  });

  $scope.loggedin = false;
  console.log("logging scope.loggedin " + $scope.loggedin);

  var authCheck = function () {
    console.log("logging the scope in authCheck " + $scope.loggedin);
    return auth.user !== null;
  };
  authCheck();
  // end authentication check

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
        $location.path('/cart');
      });
    }
  };

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
