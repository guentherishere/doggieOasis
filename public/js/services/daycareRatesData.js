app.service('daycareRatesData', function($http, $q) {

  this.getDaycareRatesData = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/daycareRates',
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addDaycareRatesData = function(daycareRates) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:1337/api/daycareRates',
      data: {
        daycareRatesText: daycare.daycareText
      }
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteDaycareRatesData = function(daycareRates) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/api/daycareRates/' + daycareRates._id
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateDaycareRatesData = function(daycareRates) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:1337/api/daycareRates/' + daycareRates._id,
      data: {
        daycareRatesText: daycare.daycareRatesText
      }
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
