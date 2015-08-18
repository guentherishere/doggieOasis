app.controller('editAddressCtrl', function ($scope, addressData, $routeParams) {

  var getAddress = function () {
    addressData.getAddressData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.address = response[i];
          console.log($scope.address);
        }
      }
    });
  };
  getAddress();

  $scope.updateAddress = function (address) {
    addressData.updateAddressData(address).then(function (response) {
      getAddress();
    });
  };
});
