import React, { useState, useEffect } from 'react';
import weatherService from '../services/weather';

const CityForecast = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    weatherService.getWeatherForecast().then(data => setData(data));
  }, []);
  const kelvinToCelcius = temp => Math.round(temp - 273.15);
  const formatTime = date => {
    const split = date.split(' ')[1].split(':');
    return split[0] + ':' + split[1];
  };
  let rain = 0;
  if (data.snow) rain = data.snow['3h'];
  if (data.rain) rain = data.rain['3h'];

  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <>
      <div
        style={{
          color: '#70757A',
          borderColor: '#E6E6E6 ',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '5px'
        }}
        className="text-center"
      >
        <div>
          <p style={{ height: '15px' }}>{formatTime(data.dt_txt)}</p>
          <img src={iconUrl} alt="Weather icon"></img>
          <p style={{ height: '13px' }}>{kelvinToCelcius(data.main.temp)}°C</p>
        </div>
        <div
          style={{
            backgroundColor: '#E5F6FD',
            listStyleType: 'none',
            fontSize: '10px',
            color: ' #70757A'
          }}
        >
          <li>{data.wind.speed}m/s</li>
          <li>{data.main.humidity}% </li>
          <li>{rain}mm</li>
        </div>
      </div>
    </>
  );
};

export default CityForecast;
