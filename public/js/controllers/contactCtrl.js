app.controller('contactCtrl', function ($scope, addressData) {

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

  var getGroomingHours = function () {
    groomingData.getGroomingData().then(function (response) {
      console.log(response);
      $scope.groomingHours = response;
    });
  };
  getGroomingHours();

});
