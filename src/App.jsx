import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import CitySelect from './components/CitySelect';
import AllCities from './components/AllCities';

const App = () => {
  const [filter, setFilter] = useState(0);

  return (
    <>
      <div className="text-center p-3 " style={{ backgroundColor: '#FFFFFF' }}>
        <h1 style={{ color: ' #26262', fontSize: '23px' }}>Säätutka</h1>
      </div>
      <div className="pt-3">
        <Container>
          <CitySelect setFilter={setFilter} />
          <AllCities filter={filter} />
        </Container>
      </div>
    </>
  );
};

export default App;
