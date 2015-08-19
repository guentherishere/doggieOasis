app.controller('spaCtrl', function ($scope, spaData, $routeParams) {
  var getSpa = function () {
    spaData.getSpaData().then(function (response) {
      $scope.spas = response;
    });
  };
  getSpa();

  var getSpaEdit = function () {
    spaData.getSpaData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.spa = response[i];
          console.log($scope.spa);
        }
      }
    });
  };
  getSpaEdit();

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
