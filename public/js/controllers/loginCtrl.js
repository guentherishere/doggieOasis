app.controller('loginCtrl', function ($scope, loginData, $routeParams, $location, $rootScope, $firebaseAuth) {

  var ref = new Firebase('https://doggieoasis.firebaseio.com/');
  $rootScope.auth = $firebaseAuth(ref);

  $scope.signUp = function () {
    // var storeUser = function() {
    //   console.log("did it get here?");
    //   console.log(usrEmail);
    //   loginData.addLoginData(usrEmail);
    // };
    $rootScope.auth.$createUser($scope.email, $scope.password, function (error, user) {
      if (!error) {
        shoe = $scope.email;
        console.log("this is the sho " + shoe);
        var storeUser = function() {
          console.log("this is the sho in the function " + shoe);
          console.log("did it get here?");
          loginData.addLoginData(shoe);
        };
        storeUser(shoe);
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

  // var getLogin = function () {
  //   loginData.getLoginData().then(function (response) {
  //     $scope.logins = response;
  //   });
  // };
  // getLogin();
  //
  // var getLoginEdit = function () {
  //   loginData.getLoginData().then(function (response) {
  //     for (var i = 0; i < response.length; i++) {
  //       if ($routeParams.id === response[i]._id) {
  //         $scope.login = response[i];
  //         console.log($scope.login);
  //       }
  //     }
  //   });
  // };
  // getLoginEdit();
  //
  // $scope.addNewLogin = function (isValid) {
  //   if (isValid) {
  //     loginData.addLoginData($scope.login).then(function (response) {
  //       getLogin();
  //       $location.path('/login');
  //       Materialize.toast('Added successfully', 1000);
  //     }, function (err) {
  //       Materialize.toast('There was an error', 1000);
  //     });
  //   }
  // };
  //
  // $scope.deleteLogin = function (login) {
  //   console.log(login);
  //   loginData.deleteLoginData(login).then(function (response) {
  //     getLogin();
  //     Materialize.toast('Deleted successfully', 1000);
  //   }, function (err) {
  //     Materialize.toast('There was an error', 1000);
  //   });
  // };
  //
  // $scope.updateLogin = function (login) {
  //   loginData.updateLoginData(login).then(function (response) {
  //     getLogin();
  //     $location.path('/login');
  //     Materialize.toast('Updated successfully', 1000);
  //   }, function (err) {
  //     Materialize.toast('There was an error', 1000);
  //   });
  // };



});
