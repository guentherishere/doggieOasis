app.controller('spaCtrl', function ($scope, spaData, $routeParams, $location) {
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
        $location.path('/spa');
        Materialize.toast('Added successfully', 1000);
      }, function (err) {
        Materialize.toast('There was an error', 1000);
      });
    }
  };

  $scope.deleteSpa = function (spa) {
    console.log(spa);
    spaData.deleteSpaData(spa).then(function (response) {
      getSpa();
      Materialize.toast('Deleted successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.updateSpa = function (spa) {
    spaData.updateSpaData(spa).then(function (response) {
      getSpa();
      $location.path('/spa');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

});
