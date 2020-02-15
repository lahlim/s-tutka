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
  //const [currentData, setCurrentData] = useState({});

  if (!data.city) return <h2>Loading...</h2>;
  return (
    <>
      <CitySelect />
      {cityIdArray.map(cityId => {
        return <CityWeather id={cityId} />;
      })}
      <Row className="p-2">
        {data.list.slice(0, 5).map(forecast => {
          return (
            <Col key={forecast.dt} className="p-1">
              <CityForecast data={forecast} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default App;
