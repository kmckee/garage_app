angular.module('starter.controllers', ['services'])

.controller('DashCtrl', function($scope, doorOpener, doorStatus, $ionicPopup) {
    $scope.doorStatus = '_______';
    var notifyError = function () {
        $ionicPopup.alert({
            title: 'Error',
            template: '<p>Is your internet connection working?</p>'
        });
    };

    $scope.allowedToOpenOrClose = true;
    $scope.openOrCloseDoor = function() {
        $scope.allowedToOpenOrClose = false;
        doorOpener.toggle()
            .then(
                function () { $scope.message = "Door opened!"; }, 
                notifyError)
            .finally(function () { $scope.allowedToOpenOrClose = true; });
    };
    
    doorStatus.notify(function me(newDoorStatus) {
        var message = "OPEN";
        if (newDoorStatus === 0) {
            message = "CLOSED";
        }
        $scope.doorStatus = message;
    });
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});

