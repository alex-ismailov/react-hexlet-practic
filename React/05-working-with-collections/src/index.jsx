import ReactDOM from 'react-dom';
import React from 'react';

import Definitions from './Definitions.jsx';

const definitions = [
  { dt: 'one', dd: 'two' },
  { dt: 'another term', dd: 'another description' },
];

ReactDOM.render(
  <Definitions data={definitions} />,
  document.getElementById('container'),
);
