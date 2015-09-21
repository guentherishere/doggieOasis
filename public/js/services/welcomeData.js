app.service('welcomeData', function ($http, $q) {

  this.getWelcomeData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:80/api/welcome',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  // this.addWelcomeData = function (welcome) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:80/api/welcome',
  //     data: {
  //       welcomeText: welcome.welcomeText
  //     }
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  // this.deleteWelcomeData = function (welcome) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'DELETE',
  //     url: 'http://localhost:80/api/welcome/' + welcome._id
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  this.updateWelcomeData = function (welcome) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:80/api/welcome/' + welcome._id,
      data: {
        welcomeText: welcome.welcomeText
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
