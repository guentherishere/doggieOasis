app.controller('spaCtrl', function ($scope, spaData) {
  var getSpa = function () {
    spaData.getSpaData().then(function (response) {
      $scope.spas = response;
    });
  };
  getSpa();

  $scope.addNewSpa = function (isValid) {
    if (isValid) {
      spaData.addSpaData($scope.spa).then(function (response) {
        getSpa();
      });
    }
  };

  $scope.deleteSpa = function (spa) {
    console.log(spa);
    spaData.deleteSpaData(spa).then(function (response) {
      getSpa();
    });
  };

  $scope.updateSpa = function (spa) {
    spaData.updateSpaData(spa).then(function (response) {
      getSpa();
    });
  };

});
