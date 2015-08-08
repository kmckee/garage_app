angular.module('services')
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
