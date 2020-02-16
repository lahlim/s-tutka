import React from 'react';
import Form from 'react-bootstrap/Form';

const CitySelect = ({ setFilter }) => (
  <Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control
        onChange={e => setFilter(e.target.value)}
        style={{ fontSize: '13px', color: '#262626', borderColor: '#E6E6E6' }}
        as="select"
      >
        <option value={0}>Kaikki kaupungit</option>
        <option value={658225}>Helsinki</option>
        <option value={655195}>Jyväskylä</option>
        <option value={650225}>Kuopio</option>
        <option value={634964}>Tampere</option>
      </Form.Control>
    </Form.Group>
  </Form>
);

export default CitySelect;
