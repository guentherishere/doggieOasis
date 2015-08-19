app.controller('welcomeCtrl', function ($scope, welcomeData, $routeParams, $location) {

  var getWelcome = function () {
    welcomeData.getWelcomeData().then(function (response) {
      console.log(response);
      $scope.welcomeText = response;
    });
  };
  getWelcome();

  var getWelcomeEdit = function () {
    welcomeData.getWelcomeData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.welcome = response[i];
          console.log($scope.welcome);
        }
      }
    });
  };
  getWelcomeEdit();

  $scope.updateWelcome = function (welcome) {
    welcomeData.updateWelcomeData(welcome).then(function (response) {
      getWelcome();
      $location.path('/#/');
    });
  };
});
