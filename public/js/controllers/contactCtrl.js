app.controller('contactCtrl', function ($scope, addressData, daycareData, groomingData, $routeParams, $location) {

  var getAddress = function () {
    addressData.getAddressData().then(function (response) {
      console.log(response);
      $scope.addressText = response;
    });
  };
  getAddress();

  var getDaycareHours = function () {
    daycareData.getDaycareData().then(function (response) {
      console.log(response);
      $scope.daycareHours = response;
    });
  };
  getDaycareHours();

  var getDaycareHoursEdit = function () {
    daycareData.getDaycareData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.daycare = response[i];
          console.log($scope.daycare);
        }
      }
    });
  };
  getDaycareHoursEdit();

  $scope.updateDaycare = function (daycare) {
    daycareData.updateDaycareData(daycare).then(function (response) {
      getDaycareHours();
      $location.path('/contact');
    });
  };

  var getGroomingHours = function () {
    groomingData.getGroomingData().then(function (response) {
      console.log(response);
      $scope.groomingHours = response;
    });
  };
  getGroomingHours();

  var getGroomingHoursEdit = function () {
    groomingData.getGroomingData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.grooming = response[i];
          console.log($scope.grooming);
        }
      }
    });
  };
  getGroomingHoursEdit();

  $scope.updateGrooming = function (grooming) {
    groomingData.updateGroomingData(grooming).then(function (response) {
      getGroomingHours();
      $location.path('/contact');
    });
  };

  var getAddressEdit = function () {
    addressData.getAddressData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.address = response[i];
          console.log($scope.address);
        }
      }
    });
  };
  getAddressEdit();

  $scope.updateAddress = function (address) {
    addressData.updateAddressData(address).then(function (response) {
      getAddress();
      $location.path('/contact');
    });
  };

  $scope.sendTheMail = function() {
          var m = new mandrill.Mandrill('Fn6Lb7b5FHh46KRAe6zCOg');
          var email = document.getElementById('userEmail').value;
          var name = document.getElementById('userName').value;
          var subject = document.getElementById('userSubject').value;
          var message = document.getElementById('userMessage').value;
          var emailBody = "From: " + name + "<br><br>" +  + "Subject: " + subject + "<br><br>" + message;

          var params = {

              "message": {
                  "from_email":email,
                  "to":[{"email":"guentherishere@gmail.com"}],
                  "subject": "New email from website",
                  "html": emailBody
              }
          };

          m.messages.send(params);
        };

});
