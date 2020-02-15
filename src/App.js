import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import CitySelect from './components/CitySelect';
import CityForecast from './components/CityForecast';
import weatherService from './services/weather';
import CityWeather from './components/CityWeather';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cityIdArray from './cityId';

const App = () => {
  return (
    <Container>
      <h1 className="text-center p-3">Säätutka</h1>
      <AllCities />
    </Container>
  );
};

const AllCities = () => {
  return (
    <>
      <CitySelect />
      {cityIdArray.map(cityId => {
        return (
          <div className="mb-4" key={cityId}>
            <CityWeather id={cityId} />
            <CityForecasts id={cityId} />
          </div>
        );
      })}
    </>
  );
};

const CityForecasts = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    weatherService.getWeatherForecast(id).then(data => setData(data));
  }, [id]);
  if (!data.city) return <h2>Loading...</h2>;
  return (
    <Row>
      {data.list.slice(1, 6).map(forecast => {
        return (
          <Col key={forecast.dt}>
            <CityForecast data={forecast} />
          </Col>
        );
      })}
    </Row>
  );
};

export default App;
