import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import CitySelect from './components/CitySelect';
import weatherService from './services/weather';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    weatherService.getWeather().then(data => setData(data));
  }, []);

  console.log(data);
  if (!data.city) return <h2>Loading...</h2>;

  return (
    <>
      <Container>
        <h1 className="text-center p-3">Säätutka</h1>
        <CitySelect />
        {data.list.slice(0, 5).map(forecast => {
          return <CityForecast data={forecast} />;
        })}
      </Container>
    </>
  );
};

const CityForecast = ({ data }) => {
  console.log();

  return (
    <>
      {data.dt_txt}
      <p></p>
      {data.main.temp}
    </>
  );
};

export default App;
