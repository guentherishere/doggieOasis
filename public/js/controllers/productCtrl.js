app.controller('productCtrl', function ($scope, cartData, productData, ratingData, ngCart, $routeParams, $location) {

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
    else if (user.id !== "a7be51f8-ba4a-4ed4-96b1-daceed7ad011") {
      console.log("You are logged in as normal user");
    }
    // admin logged in
    else {
      console.log("Logged in as admin");
      $scope.$evalAsync(function () {
        $scope.loggedin = true;
      });
    }
    $scope.$apply();
  });

  $scope.loggedin = false;
  // console.log("logging scope.loggedin " + $scope.loggedin);

  var authCheck = function () {
    // console.log("logging the scope in authCheck " + $scope.loggedin);
    return auth.user !== null;
  };
  authCheck();
  // end authentication check

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
          // console.log($scope.product);
        }
      }
    });
  };
  // getProductsEdit();

  $scope.addNewProduct = function (isValid) {
    if (isValid) {
      productData.addProductData($scope.product).then(function (response) {
        getProducts();
        $location.path('/store');
        Materialize.toast('Added successfully', 1000);
      }, function (err) {
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
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.addNewRating = function (isValid, rating, product) {
    if (isValid) {
      console.log("This is a test");
      console.log(product);
      ratingData.addRatingData(rating, product).then(function (response) {
        console.log("New Rating Instance: ", response);
        getProducts();
        $location.path('/store');
        Materialize.toast('Added successfully', 1000);
      }, function (err) {
        Materialize.toast('There was an error', 1000);
      });
    }
  };

  // var getRatings = function () {
  //   ratingData.getRatingData().then(function (response) {
  //     $scope.ratings = response;
  //   });
  // };
  // getRatings();

  // $scope.addNewCart = function (product) {
  //   cartData.addCartData($scope.product).then(function (response) {
  //     getCart();
  //     console.log(product);
  //     $location.path('/store');
  //     Materialize.toast('Added successfully', 1000);
  //   }, function (err) {
  //     Materialize.toast('There was an error', 1000);
  //   });
  // };

});
