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

.controller('HomeCtrl', function($scope, $ionicListDelegate) {
  
  //This here should be smarter, doing some kind of calculation to dynamically generate this list from the top five friends.

  $scope.besties = [
    {id: 1, title: 'Jeff', push: 'Roll Tide'},
    {id: 2, title: 'Jake', push: 'Go Dawgs'},
    {id: 3, title: 'Daniel', push: "Go Dawgs" },
    {id: 4, title: 'David', push: "Geaux Tigers" },
    {id: 5, title: 'Janet', push: "Go Vols" },
  ];

  $scope.showAlert = function(push) {
    $scope.toggleColor();
    alert(push);

  };

  $scope.showScore = function() {
    var score = "Scoreboard";
    alert(score);
  };

  $scope.toggleColor = function() {
    alert("Toggle");
  };

})

.controller('InviteCtrl', function($scope, $ionicListDelegate) {

  $scope.uninviteds = [
    {id: 1, title: 'Cletus', phone: '(555)542-5498'},
    {id: 2, title: 'Loomis', phone: '(555)542-6498'},
    {id: 3, title: 'Merle', phone: '(555)542-5798'},
    {id: 4, title: 'Willie', phone: '(555)542-5418'},
    {id: 5, title: 'Gus', phone: '(555)542-5228'}
  ];

  $scope.sendText = function(number) {
    var text = "Invite sent to ";
    alert(text + number);
  };
})

.controller('FriendsCtrl', function($scope, $ionicListDelegate) {
  $scope.friends = [
    { title: 'Jeff', id: 1, push: "Roll Tide" },
    { title: 'Jake', id: 2, push: "Go Dawgs" },
    { title: 'Daniel', id: 3, push: "Go Dawgs" },
    { title: 'David', id: 4, push: "Geaux Tigers" },
    { title: 'Janet', id: 5, push: "Go Vols" },
    { title: 'Lisa', id: 6, push: "Roll Tide" },
    { title: 'Janet', id: 7, push: "Go Vols" },
    { title: 'Heihachi', id: 8, push: "Rammer Jammer" },
    { title: 'The Doctor', id: 9, push: "Hey!" },
    { title: 'Rose', id: 10, push: "Go Dawgs" },
    { title: 'The Master', id: 11, push: "Roll Tide" },
    { title: 'Rory', id: 12, push: "Geaux Tigers" },
    { title: 'Amy', id: 13, push: "Gig 'em" },
    { title: 'Michael', id: 14, push: "Sooooeeyyy" },
    { title: 'Bolton', id: 15, push: "War Eagle" }
  ];

  $scope.showAlert = function(push) {
    alert(push);
  };

  $scope.showScore = function() {
    var score = "Scoreboard";
    alert(score);
  };


})

.controller('UserCtrl', function($scope){
  $scope.teams = [
    {id: 1, name: 'University of Alabama', callout: 'Roll Tide', primarycolor:'#990000', secondarycolor:'#eeeeee', style: 'ua-colors'},
    {id: 2, name: 'University of Georgia', callout: 'Go Dawgs', primarycolor:'#FF0000', secondarycolor:'#000000', style: 'uga-colors'}
  ];

  $scope.myTeam = $scope.teams[0];
})

.controller('FriendCtrl', function($scope, $stateParams) {
});
