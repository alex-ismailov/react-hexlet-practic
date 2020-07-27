import ReactDOM from 'react-dom';
import React from 'react';

import Progress from './Progress.jsx';

ReactDOM.render(
  <Progress percentage={40} />,
  document.getElementById('container'),
);
