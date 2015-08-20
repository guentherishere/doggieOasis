app.service('productData', function ($http, $q) {

  this.getProductData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/product',
    }).then(function (response) {
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
