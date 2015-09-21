app.service('loginData', function ($http, $q) {

  this.getLoginData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:80/api/users',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addLoginData = function (login) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:80/api/users',
      data: {
        email: shoe
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteLoginData = function (login) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:80/api/users/' + login._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateLoginData = function (login) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:80/api/users/' + login._id,
      data: {
        title: login.title,
        description: login.description,
        price: login.price
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
