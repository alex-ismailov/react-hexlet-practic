import ReactDOM from 'react-dom';
import React from 'react';

import Collapse from './Collapse.jsx';

const text = 'collapse me';

ReactDOM.render(
  <Collapse text={text} />,
  document.getElementById('container'),
);
