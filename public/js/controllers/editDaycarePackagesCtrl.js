app.controller('editDaycarePackagesCtrl', function ($scope, daycareRatesData, $routeParams) {

  var getDaycarePackages = function () {
    daycareRatesData.getDaycareRatesData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.daycarePackages = response[i];
          console.log($scope.daycare);
        }
      }
    });
  };
  getDaycarePackages();

  $scope.updateDaycarePackages = function (daycare) {
    daycareRatesData.updateDaycareRatesData(daycare).then(function (response) {
      getDaycarePackages();
    });
  };
});
