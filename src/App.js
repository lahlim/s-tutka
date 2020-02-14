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

  console.log(currentData);

  return (
    <Container>
      <h1 className="text-center p-3">Säätutka</h1>
      <CitySelect />
      <CityWeather data={currentData} />
      <Row>
        {data.list.map(forecast => {
          return (
            <Col key={forecast.dt}>
              <CityForecast data={forecast} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const CityWeather = ({ data }) => {
  const kelvinToCelcius = temp => Math.round(temp - 273.15);
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const date = new Date();
  const dateToShow = date.toLocaleDateString('en-EN', {
    month: 'short',
    day: 'numeric'
  });
  const time = date
    .toLocaleDateString('fi-FI', {
      hour: '2-digit',
      minute: '2-digit'
    })
    .replace('.', ':');
  console.log(dateToShow);
  return (
    <Card style={{ borderColor: '#E6E6E6' }} className="text-center p-2 mb-2">
      <Row>
        <Col>
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
        </Col>
        <Col>
          <img src={iconUrl} alt="Weather icon"></img>
          <p style={{ height: '13px' }}>{kelvinToCelcius(data.main.temp)}°C</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {dateToShow} {time}
        </Col>
        <Col>asd</Col>
      </Row>
    </Card>
  );
};

export default App;
