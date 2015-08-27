app.controller('contactCtrl', function ($scope, addressData, daycareData, groomingData, $routeParams, $location) {

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
