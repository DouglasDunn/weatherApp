var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=e0e5f6bac14b6ebffa0ad78d1bfa8136&units=imperial";

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }
    }, function(res) {
      throw new Error(res.data.message);
    });

    // return new Promise(function(resolve, reject) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("GET", requestUrl);
    //   xhr.onreadystatechange = handleResponse;
    //   xhr.onerror = function(error) {
    //     reject(error);
    //   }
    //   xhr.send();
    //
    //   function handleResponse() {
    //     if (xhr.readyState === 4) {
    //       if (xhr.status === 200) {
    //         var weatherData = JSON.parse(xhr.responseText);
    //         console.log(weatherData);
    //         resolve(weatherData.main.temp);
    //       } else {
    //         reject(this.statusText);
    //       }
    //     }
    //   }
    // });
  }
}
