import React, { useState, useEffect } from 'react';
import weatherService from '../services/weather';
import CityForecast from './CityForecast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CityForecasts = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    weatherService.getWeatherForecast(id, 6).then(data => setData(data));
  }, [id]);
  if (!data.city) return <div></div>;
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

export default CityForecasts;
