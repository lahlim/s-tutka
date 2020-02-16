import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import CitySelect from './components/CitySelect';
import AllCities from './components/AllCities';

const App = () => {
  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Container>
        <h1 className="text-center p-3">Säätutka</h1>
        <CitySelect />
        <AllCities />
      </Container>
    </div>
  );
};

export default App;
