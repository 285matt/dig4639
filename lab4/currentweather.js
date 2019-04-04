const WEATHER_API_KEY = "6aa2e08210de1709df0821a8f560f72d";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";


function Url(zip) {
  return "${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}";
}

function lat_long(lat, lon, unit) {
  return "${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}";
}

function Url2(zip2) {
  return "${API_STEM}q=${zip2}&units=metric&APPID=${WEATHER_API_KEY}";
}

function lat_long2(lat2, lon2, unit) {
  return "${API_STEM}lat=${lat2}&lon=${lon2}&units=metric&APPID=${WEATHER_API_KEY}";
}

function fetchForecast(url) {
  return fetch(url)
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
}
function fetchZipForecast(zip) {
  return fetchForecast(Url(zip));
}

function fetchLatLonForecast(lat, lon) {
  return fetchForecast(lat_long(lat, lon));
}
function fetchZipForecast2(zip) {
  return fetchForecast(Url2(zip));
}
function fetchLatLonForecast2(lat, lon) {
  return fetchForecast(lat_long2(lat, lon));
}
export default {
  fetchZipForecast: fetchZipForecast,
  fetchLatLonForecast: fetchLatLonForecast,
  fetchZipForecast2: fetchZipForecast2,
  fetchLatLonForecast2: fetchLatLonForecast2

};
