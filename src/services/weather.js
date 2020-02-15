import axios from 'axios';

const getWeatherForecast = () => {
  const request = axios.get(
    'http://api.openweathermap.org/data/2.5/forecast?id=634964&cnt=6&APIKEY=9baeaf613a5f530b584aef82691010d3'
  );
  return request.then(response => response.data);
};

const getWeather = id => {
  console.log(id);

  const request = axios.get(
    `http://api.openweathermap.org/data/2.5/weather/?id=${id}&APIKEY=9baeaf613a5f530b584aef82691010d3`
  );
  return request.then(response => response.data);
};

export default { getWeather, getWeatherForecast };
