app.controller('contactCtrl', function ($scope, addressData, daycareData, groomingData, $routeParams, $location) {

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

  var getAddress = function () {
    addressData.getAddressData().then(function (response) {
      console.log(response);
      $scope.addressText = response;
    });
  };
  getAddress();

  var getDaycareHours = function () {
    daycareData.getDaycareData().then(function (response) {
      console.log(response);
      $scope.daycareHours = response;
    });
  };
  getDaycareHours();

  var getDaycareHoursEdit = function () {
    daycareData.getDaycareData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.daycare = response[i];
          console.log($scope.daycare);
        }
      }
    });
  };
  getDaycareHoursEdit();

  $scope.updateDaycare = function (daycare) {
    daycareData.updateDaycareData(daycare).then(function (response) {
      getDaycareHours();
      $location.path('/contact');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  var getGroomingHours = function () {
    groomingData.getGroomingData().then(function (response) {
      console.log(response);
      $scope.groomingHours = response;
    });
  };
  getGroomingHours();

  var getGroomingHoursEdit = function () {
    groomingData.getGroomingData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.grooming = response[i];
          console.log($scope.grooming);
        }
      }
    });
  };
  getGroomingHoursEdit();

  $scope.updateGrooming = function (grooming) {
    groomingData.updateGroomingData(grooming).then(function (response) {
      getGroomingHours();
      $location.path('/contact');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  var getAddressEdit = function () {
    addressData.getAddressData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.address = response[i];
          console.log($scope.address);
        }
      }
    });
  };
  getAddressEdit();

  $scope.updateAddress = function (address) {
    addressData.updateAddressData(address).then(function (response) {
      getAddress();
      $location.path('/contact');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.sendEmail = function (fromEmail, fromName, toEmail, toName, subject, message) {
    addressData.sendEmail(fromEmail, fromName, toEmail, toName, subject, message).then(function (response) {
      $scope.fromEmail = '';
      $scope.fromName = '';
      $scope.message = '';
      Materialize.toast('Message sent successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

});
