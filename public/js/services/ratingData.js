app.service('ratingData', function ($http, $q) {

  this.getRatingData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/rating',
    }).then(function (response) {
      console.log("this is the rating");
      console.log(response);
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addRatingData = function (rating, product) {
    var ratingObj = {rating: rating.number, product: product._id};
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:1337/api/rating',
      data: ratingObj
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
