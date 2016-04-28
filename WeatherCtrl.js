'use strict';

var weatherapp = angular.module('weatherapp', []);

weatherapp.controller('WeatherCtrl', function ($scope, weatherService) {
    //console.log($scope.zipcode);
    $scope.$watch('zipcode', function(newCity) {
        //console.log(newCity.length);
        if(newCity && newCity.length == 5) {
            console.log('Calling weatherService');
            $scope.weather = weatherService.getWeather(newCity);
        }})
});




weatherapp.directive('weatherIcon', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            cloudiness: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
                if ($scope.cloudiness < 20) {
                    return '/1stProject/WeatherApp/Images/Status-weather-clear-icon.png';
                } else if ($scope.cloudiness < 90) {
                    return '/1stProject/WeatherApp/Images/Status-weather-clouds-icon.png';
                } else {
                    return '/1stProject/WeatherApp/Images/Status-weather-many-clouds-icon.png';
                }
            };
        },
        template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
    };
});
