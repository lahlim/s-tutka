import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import weatherService from '../services/weather';

const CityWeather = ({ id }) => {
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});

  // Current weather fetch and forecast for rain
  useEffect(() => {
    weatherService.getWeather(id).then(data => setData(data));
    weatherService
      .getWeatherForecast(id, 1)
      .then(data => setForecastData(data.list[0]));
  }, [id]);

  if (!data.name) return <div></div>;

  //  Conver the unit of temp to °C
  const kelvinToCelcius = temp => Math.round(temp - 273.15);

  //  Borrowed from: https://gist.github.com/jlbruno/1535691
  const getOrdinal = date => {
    let s = ['th', 'st', 'nd', 'rd'],
      v = date % 100;
    return date + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  // Date parsing to proper format
  const date = new Date();
  let dateToShow = getOrdinal(
    date.toLocaleDateString('en-EN', {
      month: 'short',
      day: 'numeric'
    })
  );

  // Parse time to proper format
  let time = date
    .toLocaleDateString('fi-FI', {
      hour: 'numeric',
      minute: 'numeric'
    })
    .split(' ');
  time = time[2].replace('.', ':');

  // Set rain values
  let rain = 0;
  if (forecastData.snow) rain = forecastData.snow['3h'];
  if (forecastData.rain) rain = forecastData.rain['3h'];
  const weatherDescription = data.weather[0].description.replace(
    data.weather[0].description[0],
    data.weather[0].description[0].toUpperCase()
  );

  // Fix the character encoding issue
  if (data.name === 'Jyvaeskylae') data.name = 'Jyväskylä';
  return (
    <Card style={{ borderColor: '#E6E6E6' }} className=" p-2 mb-2">
      <Row>
        <Col>
          <p style={{ color: '#262626', fontSize: '19px', margin: '0px' }}>
            {data.name}
          </p>
          <p style={{ color: '#70757A', fontSize: '13px' }}>
            {weatherDescription}
          </p>
        </Col>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <img
            src={iconUrl}
            style={{ minHeight: '26px', width: 'auto' }}
            alt="Weather icon"
          ></img>
          <p style={{ fontSize: '26px', color: '#262626 ' }}>
            {kelvinToCelcius(data.main.temp)}°C
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={4} style={{ listStyleType: 'none', margin: '0px' }}>
          <li style={{ fontSize: '15px', color: '#262626' }}>{dateToShow}</li>
          <li style={{ fontSize: '13px', color: ' #70757A' }}>{time}</li>
        </Col>
        <Col
          style={{
            listStyleType: 'none',
            fontSize: '13px',
            color: ' #70757A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
          }}
        >
          <li>Wind: {data.wind.speed} m/s</li>

          <li>Humidity: {data.main.humidity} %</li>
          <li>Precipitation (3 h): {rain} mm </li>
        </Col>
      </Row>
    </Card>
  );
};

export default CityWeather;
