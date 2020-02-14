import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import CitySelect from './components/CitySelect';
import CityForecast from './components/CityForecast';
import weatherService from './services/weather';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const App = () => {
  const [data, setData] = useState({});
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    weatherService.getWeatherForecast().then(data => setData(data));
    weatherService.getWeather().then(data => setCurrentData(data));
  }, []);

  if (!data.city || !currentData.name) return <h2>Loading...</h2>;

  return (
    <Container>
      <h1 className="text-center p-3">Säätutka</h1>
      <CitySelect />
      <CityWeather data={currentData} />
      <Row className="p-2">
        {data.list.map(forecast => {
          return (
            <Col key={forecast.dt} className="p-1">
              <CityForecast data={forecast} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const CityWeather = ({ data }) => {
  console.log(data);

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

  let time = date
    .toLocaleDateString('fi-FI', {
      hour: 'numeric',
      minute: 'numeric'
    })
    .split(' ');
  time = time[2].replace('.', ':');

  return (
    <Card style={{ borderColor: '#E6E6E6' }} className=" p-2 mb-2">
      <Row>
        <Col>
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
        </Col>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <img src={iconUrl} alt="Weather icon"></img>
          <p style={{ height: '13px' }}>{kelvinToCelcius(data.main.temp)}°C</p>
        </Col>
      </Row>
      <Row>
        <Col className="align-items end">
          {dateToShow}
          <br />
          {time}
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
          <li>Precipitation (3 h): {data.main.humidity} mm TODO FIX</li>
        </Col>
      </Row>
    </Card>
  );
};

export default App;
