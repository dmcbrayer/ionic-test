angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('FriendCtrl', function($scope) {
  $scope.friends = [
    { title: 'Jeff', id: 1, push: "Roll Tide" },
    { title: 'Jake', id: 2, push: "Go Dawgs" },
    { title: 'Daniel', id: 3, push: "Go Dawgs" },
    { title: 'David', id: 4, push: "Geaux Tigers" },
    { title: 'Rap', id: 5, push: "Go Vols" },
    { title: 'Cowbell', id: 6, push: "Roll Tide" }
  ];

  $scope.showAlert = function(push) {
    alert(push);
  };
})

.controller('FriendCtrl', function($scope, $stateParams) {
});
