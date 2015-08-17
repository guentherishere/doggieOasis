app.controller('welcomeCtrl', function ($scope, welcomeData) {

  var getWelcome = function () {
    welcomeData.getWelcomeData().then(function (response) {
      console.log(response);
      $scope.welcomeText = response;
    });
  };
  getWelcome();
});
