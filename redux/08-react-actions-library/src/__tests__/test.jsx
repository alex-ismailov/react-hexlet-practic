import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducers from '../reducers/index.js';
import App from '../components/App.jsx';

test('Store', () => {
  const store = createStore(reducers);

  const vdom = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const { asFragment } = render(vdom);
  expect(asFragment()).toMatchSnapshot();

  const newTaskInput = screen.getByTestId('input');
  const newTaskSubmit = screen.getByTestId('submit');

  userEvent.type(newTaskInput, 'na-na');
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(newTaskSubmit);
  expect(asFragment()).toMatchSnapshot();

  userEvent.type(newTaskInput, 'another task');
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(newTaskSubmit);
  expect(asFragment()).toMatchSnapshot();

  const closeButtons = screen.getAllByText('×');
  userEvent.click(closeButtons[0]);
  expect(asFragment()).toMatchSnapshot();
});
