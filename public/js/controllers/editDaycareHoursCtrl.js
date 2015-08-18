app.controller('editDaycareHoursCtrl', function ($scope, daycareData, $routeParams) {

  var getDaycareHours = function () {
    daycareData.getDaycareData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.daycare = response[i];
          console.log($scope.daycare);
        }
      }
    });
  };
  getDaycareHours();

  $scope.updateDaycare = function (daycare) {
    daycareData.updateDaycareData(daycare).then(function (response) {
      getDaycareHours();
    });
  };
});
