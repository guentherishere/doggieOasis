app.controller('daycareRatesCtrl', function ($scope, daycareRatesData) {
  var getDaycareRates = function () {
    daycareRatesData.getDaycareRatesData().then(function (response) {
      $scope.daycareRates = response;
    });
  };
  getDaycareRates();

  $scope.addNewDaycareRates = function (isValid) {
    if (isValid) {
      daycareRatesData.addDaycareRatesData($scope.daycareRates).then(function (response) {
        getDaycareRates();
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
    });
  };

});
