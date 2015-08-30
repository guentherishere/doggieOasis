app.controller('welcomeCtrl', function ($scope, welcomeData, $routeParams, $location) {

  var ref = new Firebase('https://doggieoasis.firebaseio.com/');

  var auth = new FirebaseSimpleLogin(ref, function (error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (user) {
      // user is logged in
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      console.log("Logged in");
      loggedin = true;
    } else {
      // user is not logged in
      console.log("Not logged in");
    }
  });

  var loggedin = false;

  var authCheck = function () {
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
