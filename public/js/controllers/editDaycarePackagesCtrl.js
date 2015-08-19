app.controller('editDaycarePackagesCtrl', function ($scope, daycareRatesData, $routeParams) {

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

  $scope.updateDaycarePackages = function (daycare) {
    daycareRatesData.updateDaycareRatesData(daycare).then(function (response) {
      getDaycarePackages();
    });
  };
});
