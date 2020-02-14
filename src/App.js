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

  if (!data.city) return <h2>Loading...</h2>;

  console.log(currentData);

  return (
    <Container>
      <h1 className="text-center p-3">Säätutka</h1>
      <CitySelect />
      <CityWeather />
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

const CityWeather = () => {
  return (
    <Card style={{ borderColor: '#E6E6E6' }} className="text-center p-2 mb-2">
      <Row>
        <Col>asd</Col>
        <Col>asd</Col>
      </Row>
      <Row>
        <Col>asd</Col>
        <Col>asd</Col>
      </Row>
    </Card>
  );
};

export default App;
