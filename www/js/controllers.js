angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
    $scope.allowedToOpenOrClose = true;
    $scope.openOrCloseDoor = function() {
        var         deviceId = '55ff6c065075555317501687',
        accessToken = "bb03e9ee7273f448e94282b06ebd72ff533ca1c2";

        $scope.allowedToOpenOrClose = false;
       // $.ajax({
       //     method: 'POST',
       //     url: "https://api.particle.io/v1/devices/55ff6c065075555317501687/garage?access_token=bb03e9ee7273f448e94282b06ebd72ff533ca1c2",
       //     data: {access_token: accessToken}, 
       //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       // })
       // $http({
       //     method: 'POST',
       //     url: "https://api.particle.io/v1/devices/55ff6c065075555317501687/garage?access_token=bb03e9ee7273f448e94282b06ebd72ff533ca1c2",
       //     data: {}, 
       //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
       // })A
       /*
        $.post("https://api.particle.io/v1/devices/55ff6c065075555317501687/garage", {params: '', access_token: "bb03e9ee7273f448e94282b06ebd72ff533ca1c2"})
        .done(function success() {
            $scope.allowedToOpenOrClose = true;
            console.log('success');
        })
        .error(function errors (err) {
            console.log('error', err);
            $scope.allowedToOpenOrClose = true;
        });

        */ 
        $http({
            method: 'POST',
            url: "https://api.particle.io/v1/devices/55ff6c065075555317501687/garage?access_token=bb03e9ee7273f448e94282b06ebd72ff533ca1c2",
            data: { params: '', access_token: "bb03e9ee7273f448e94282b06ebd72ff533ca1c2" },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(function success () {
            $scope.allowedToOpenOrClose = true;
            console.log('success');
        }, function error (err) {
            $scope.allowedToOpenOrClose = true;
            console.log('error:', err);
        });
    };
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
