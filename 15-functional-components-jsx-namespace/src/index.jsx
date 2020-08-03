import ReactDOM from 'react-dom';
import React from 'react';

import Card from './Card.jsx';

const dom = (
  <Card>
    <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>Text</Card.Text>
    </Card.Body>
  </Card>
);

ReactDOM.render(
  dom,
  document.getElementById('container'),
);
