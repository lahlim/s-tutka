import axios from 'axios';

const getWeatherForecast = id => {
  const request = axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=6&APIKEY=9baeaf613a5f530b584aef82691010d3`
  );
  return request.then(response => response.data);
};

const getWeather = id => {
  const request = axios.get(
    `http://api.openweathermap.org/data/2.5/weather/?id=${id}&APIKEY=9baeaf613a5f530b584aef82691010d3`
  );
  return request.then(response => response.data);
};

export default { getWeather, getWeatherForecast };
