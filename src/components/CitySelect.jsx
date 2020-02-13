import React from 'react';
import Form from 'react-bootstrap/Form';

const CitySelect = () => (
  <Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control as="select">
        <option>Kaikki kaupungit</option>
        <option>Helsinki</option>
        <option>Jyväskylä</option>
        <option>Kuopio</option>
        <option>Tampere</option>
      </Form.Control>
    </Form.Group>
  </Form>
);

export default CitySelect;
