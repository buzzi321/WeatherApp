weatherapp.factory('weatherService', function($http) {
    return {
        getWeather: function(zipcode) {
            console.log(zipcode);
            var weather = { temp: {}, clouds: null };
            $http.jsonp('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&units=metric&callback=JSON_CALLBACK&appid=00367f07abbea6ae11546af8d26f856e').success(function(data) {
                if (data) {
                    if (data.main) {
                        weather.temp.current = data.main.temp;
                        weather.temp.min = data.main.temp_min;
                        weather.temp.max = data.main.temp_max;
                        weather.city = data.name;
                        weather.country = data.sys.country;
                    }
                    weather.clouds = data.clouds ? data.clouds.all : undefined;
                }
            });

            return weather;
        }
    };
});