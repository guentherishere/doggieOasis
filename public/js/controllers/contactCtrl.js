app.controller('contactCtrl', function ($scope, addressData, daycareData, groomingData, $routeParams) {

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
    });
  };

});
