app.controller('editWelcomeCtrl', function ($scope, welcomeData, $routeParams) {

  var getWelcome = function () {
    welcomeData.getWelcomeData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.welcome = response[i];
          console.log($scope.welcome);
        }
      }
    });
  };
  getWelcome();

  $scope.updateWelcome = function (welcome) {
    welcomeData.updateWelcomeData(welcome).then(function (response) {
      getWelcome();
    });
  };
});
