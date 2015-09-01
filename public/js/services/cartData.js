app.service('cartData', function ($http, $q) {

  this.getCartData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/cart',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addCartData = function (product) {
    var deferred = $q.defer();
    console.log("This is the console log of the user email");
    console.log(user.email);
    $http({
      method: 'POST',
      url: 'http://localhost:1337/api/users',
      data: {
        email: user.email
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteCartData = function (cart) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/api/cart/' + cart._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateCartData = function (cart) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:1337/api/cart/' + cart._id,
      data: {
        title: cart.title,
        description: cart.description,
        price: cart.price,
        image: cart.image
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
