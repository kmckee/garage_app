angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, doorOpener, doorStatus, $ionicPopup) {
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
})

.constant('ACCESS_TOKEN', 'bb03e9ee7273f448e94282b06ebd72ff533ca1c2')

.constant('DEVICE_ID', '55ff6c065075555317501687')

.factory('doorStatus', function($http, DEVICE_ID, ACCESS_TOKEN, $interval) {

    var subscribe = function(callback) {
        $interval(function () {
            getStatus().then(function(newStatus) {
                callback(newStatus);
            });
        }, 2000);
    };

    var getStatus = function() {
        return $http({
            method: 'GET',
            url: "https://api.particle.io/v1/devices/" + DEVICE_ID + "/doorState?access_token=" + ACCESS_TOKEN
        }).then(function(response) {
            return response.data.result;
        });
    };

    return {
        notify: subscribe
    };
})

.factory('doorOpener', function($http, DEVICE_ID, ACCESS_TOKEN) {
    var toggle = function () {
        return $http({
            method: 'POST',
            url: "https://api.particle.io/v1/devices/" + DEVICE_ID + "/garage?access_token=" + ACCESS_TOKEN,
            data: { params: '', access_token: ACCESS_TOKEN },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
    return {
        toggle: toggle
    };
});
