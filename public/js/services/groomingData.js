app.service('groomingData', function ($http, $q) {

  this.getGroomingData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:80/api/grooming',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  // this.addGroomingData = function (grooming) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:80/api/grooming',
  //     data: {
  //       groomingText: grooming.groomingText
  //     }
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  // this.deleteGroomingData = function (grooming) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'DELETE',
  //     url: 'http://localhost:80/api/grooming/' + grooming._id
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  this.updateGroomingData = function (grooming) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:80/api/grooming/' + grooming._id,
      data: {
        monday: grooming.monday,
        tuesday: grooming.tuesday,
        wednesday: grooming.wednesday,
        thursday: grooming.thursday,
        friday: grooming.friday,
        saturday: grooming.saturday,
        sunday: grooming.sunday
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
});
