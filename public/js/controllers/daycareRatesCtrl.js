app.controller('daycareRatesCtrl', function ($scope, daycareRatesData, $routeParams, $location) {

  //authentication check
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

  var getDaycareRates = function () {
    daycareRatesData.getDaycareRatesData().then(function (response) {
      $scope.daycareRates = response;
    });
  };
  getDaycareRates();

  var getDaycarePackagesEdit = function () {
    daycareRatesData.getDaycareRatesData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.daycarePackages = response[i];
          console.log($scope.daycare);
        }
      }
    });
  };
  getDaycarePackagesEdit();

  $scope.addNewDaycareRates = function (isValid) {
    if (isValid) {
      daycareRatesData.addDaycareRatesData($scope.daycareRates).then(function (response) {
        getDaycareRates();
        $location.path('/daycareRates');
        Materialize.toast('Added successfully', 1000);
      }, function (err) {
        Materialize.toast('There was an error', 1000);
      });
    }
  };

  $scope.deleteDaycareRates = function (daycareRates) {
    console.log(daycareRates);
    daycareRatesData.deleteDaycareRatesData(daycareRates).then(function (response) {
      getDaycareRates();
      Materialize.toast('Deleted successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.updateDaycareRates = function (daycareRates) {
    daycareRatesData.updateDaycareRatesData(daycareRates).then(function (response) {
      getDaycareRates();
      $location.path('/daycareRates');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

});
