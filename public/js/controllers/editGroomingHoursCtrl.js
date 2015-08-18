app.controller('editGroomingHoursCtrl', function ($scope, groomingData, $routeParams) {

  var getGroomingHours = function () {
    groomingData.getGroomingData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.grooming = response[i];
          console.log($scope.grooming);
        }
      }
    });
  };
  getGroomingHours();

  $scope.updateGrooming = function (grooming) {
    groomingData.updateGroomingData(grooming).then(function (response) {
      getGroomingHours();
    });
  };
});
