import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

import App from './components/App.jsx';
import reducers from './reducers.js';
import { updateText, resetText } from './actions.js';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// BEGIN (write your solution here)
const render = (text) => {
  ReactDOM.render(
    <App
      dispatch={store.dispatch}
      text={text}
      updateText={updateText}
      resetText={resetText}
    />,
    document.getElementById('container'),
  );
};

store.subscribe(() => {
  const { text } = store.getState();
  render(text);
});

render();
// END
