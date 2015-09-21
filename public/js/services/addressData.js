app.service('addressData', function ($http, $q) {

  this.getAddressData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:80/api/address',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  // this.addAddressData = function (address) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:80/api/address',
  //     data: {
  //       addressText: address.addressText
  //     }
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };
  //
  // this.deleteAddressData = function (address) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'DELETE',
  //     url: 'http://localhost:80/api/address/' + address._id
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  this.updateAddressData = function (address) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:80/api/address/' + address._id,
      data: {
        address: address.address,
        city: address.city,
        state: address.state,
        zip: address.zip,
        phone: address.phone,
        email: address.email
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.sendEmail = function (fromEmail, fromName, toEmail, toName, subject, message) {
    return $http({
      method: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'APIKEYHERE',
        'message': {
          'from_email': fromEmail,
          'to': [{
            'email': toEmail,
            'name': toName,
            'type': 'to'
          }],
          'subject': subject,
          'html': '<p>' + message + '</p> <p> - ' + fromName + '</p>'
        }
      }
    });
  };

});
