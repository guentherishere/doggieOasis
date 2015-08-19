app.controller('daycareRatesCtrl', function ($scope, daycareRatesData, $routeParams, $location) {
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
      });
    }
  };

  $scope.deleteDaycareRates = function (daycareRates) {
    console.log(daycareRates);
    daycareRatesData.deleteDaycareRatesData(daycareRates).then(function (response) {
      getDaycareRates();
    });
  };

  $scope.updateDaycareRates = function (daycareRates) {
    daycareRatesData.updateDaycareRatesData(daycareRates).then(function (response) {
      getDaycareRates();
      $location.path('/daycareRates');
    });
  };

});
