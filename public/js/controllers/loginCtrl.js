app.controller('loginCtrl', function ($scope, loginData, $routeParams, $location) {
  var getLogin = function () {
    loginData.getLoginData().then(function (response) {
      $scope.logins = response;
    });
  };
  getLogin();

  var getLoginEdit = function () {
    loginData.getLoginData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.login = response[i];
          console.log($scope.login);
        }
      }
    });
  };
  getLoginEdit();

  $scope.addNewLogin = function (isValid) {
    if (isValid) {
      loginData.addLoginData($scope.login).then(function (response) {
        getLogin();
        $location.path('/login');
        Materialize.toast('Added successfully', 1000);
      }, function (err) {
        Materialize.toast('There was an error', 1000);
      });
    }
  };

  $scope.deleteLogin = function (login) {
    console.log(login);
    loginData.deleteLoginData(login).then(function (response) {
      getLogin();
      Materialize.toast('Deleted successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

  $scope.updateLogin = function (login) {
    loginData.updateLoginData(login).then(function (response) {
      getLogin();
      $location.path('/login');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };

});
