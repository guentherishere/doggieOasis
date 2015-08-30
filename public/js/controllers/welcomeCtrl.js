app.controller('welcomeCtrl', function ($scope, welcomeData, $routeParams, $location, $firebaseAuth) {

  var ref = new Firebase('https://doggieoasis.firebaseio.com/');

  //authentication check
  var auth = new FirebaseSimpleLogin(ref, function (error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    }
    // no user logged in
    else if (user === null) {
      console.log("Not logged in");
    }
    // normal user logged in
    else if (user.id !== "47f0b82b-59f2-4cae-8bfe-ecb438eb0032") {
      console.log("You are logged in as normal user");
    }
    // admin logged in
    else {
      console.log("Logged in as admin");
      $scope.$evalAsync(function() {
         $scope.loggedin = true;
      });
    }
    // $scope.$apply();
  });

  $scope.loggedin = false;
  console.log("logging scope.loggedin " + $scope.loggedin);

  var authCheck = function () {
    console.log("logging the scope in authCheck " + $scope.loggedin);
    return auth.user !== null;
  };
  authCheck();









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
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };
});
