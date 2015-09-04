app.controller('loginCtrl', function ($scope, loginData, $routeParams, $location, $rootScope, $firebaseAuth) {

  var ref = new Firebase('https://doggieoasis.firebaseio.com/');
  $rootScope.auth = $firebaseAuth(ref);

  $scope.signUp = function () {
    $rootScope.auth.$createUser($scope.email, $scope.password, function (error, user) {
      if (!error) {
        loginEmail = $scope.email;
        var storeUser = function () {
          loginData.addLoginData(loginEmail);
        };
        storeUser(loginEmail);
        Materialize.toast('Account created and logged in successfully', 5000);
      } else {
        Materialize.toast('Username and/or password invalid', 1000);
      }
    });
  };

  $scope.signIn = function () {
    $rootScope.auth.$login('password', {
      email: $scope.email,
      password: $scope.password
    }).then(function (user) {
      Materialize.toast('Logged in successfully', 1000);
      $scope.loggedin = true;
      console.log(user);
    }, function (error) {
      if (error = 'INVALID_EMAIL') {
        Materialize.toast('Email invalid or not signed up — trying to sign you up!', 5000);
        $scope.signUp();
      } else if (error = 'INVALID_PASSWORD') {
        console.log('wrong password!');
        Materialize.toast('Invalid password', 1000);
      } else {
        console.log(error);
      }
    });
  };
});
