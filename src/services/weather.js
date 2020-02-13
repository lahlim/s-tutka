import axios from 'axios';

const getWeather = () => {
  const request = axios.post(
    'http://api.openweathermap.org/data/2.5/forecast?id=634964&APIKEY=9baeaf613a5f530b584aef82691010d3'
  );
  return request.then(response => response.data);
};

export default { getWeather };
