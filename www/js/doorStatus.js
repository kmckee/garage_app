angular.module('services')

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
});

