import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import CitySelect from './components/CitySelect';
import AllCities from './components/AllCities';

const App = () => {
  const [filter, setFilter] = useState(0);

  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Container>
        <h1 className="text-center p-3">Säätutka</h1>
        <CitySelect setFilter={setFilter} />
        <AllCities filter={filter} />
      </Container>
    </div>
  );
};

export default App;
