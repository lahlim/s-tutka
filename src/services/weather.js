import axios from 'axios';

// Insert your api key here or to .env file in project root.
const APIKEY = process.env.REACT_APP_API_KEY;

// Get forecast of weather with 3h interval
const getWeatherForecast = (id, count) => {
  try {
    const request = axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=${count}&APIKEY=${APIKEY}`
    );
    return request.then(response => response.data);
  } catch (err) {
    console.log(err);
  }
};

// Get current weather with city id
const getWeather = id => {
  try {
    const request = axios.get(
      `http://api.openweathermap.org/data/2.5/weather/?id=${id}&APIKEY=${APIKEY}`
    );
    return request.then(response => response.data);
  } catch (err) {
    console.log(err);
  }
};

export default { getWeather, getWeatherForecast };
