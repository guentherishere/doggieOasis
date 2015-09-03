app.service('productData', function ($http, $q) {

  this.getProductData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/product',
    }).then(function (response) {

      console.log('response', response);
      for (var i = 0; i < response.data.length; i++) {
        var avgCount = 0;
        var avg = 0;
        for (var j = 0; j < response.data[i].rating.length; j++) {
          avg = avg + response.data[i].rating[j].rating;
          avgCount++;
        }
        avg = Math.ceil(avg / avgCount);
        console.log("this is the avg " + avg);

        //Sets intial value to zero
        if (isNaN(avg) === true) {
          response.data[i]['avg'] = 0;
        } else {
          response.data[i]['avg'] = avg;
        }

      }
      console.log(response.data);
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addProductData = function (product) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:1337/api/product',
      data: {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.getRatingData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/product',
    }).then(function (response) {

      console.log('response', response);
      var ratingArr = [];
      for (var i = 0; i < response.data.length; i++) {
        var avgCount = 0;
        var avg = 0;
        for (var j = 0; j < response.data[i].rating.length; j++) {
          avg = avg + response.data[i].rating[j].rating;
          avgCount++;
        }
        avg = avg / avgCount;
        ratingArr.push(avg);
        console.log(ratingArr);
        console.log("this is the avg " + avg);
        // return avg;
      }

      deferred.resolve(ratingArr);
    });
    return deferred.promise;
  };

  this.deleteProductData = function (product) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/api/product/' + product._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateProductData = function (product) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:1337/api/product/' + product._id,
      data: {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
