import '@testing-library/jest-dom';

import nock from 'nock';
import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { delay } from 'nanodelay';
import Autocomplete from '../Autocomplete.jsx';

const host = 'http://localhost';

beforeAll(() => {
  nock.disableNetConnect();
});

test('Autocomplete', async () => {
  render(<Autocomplete />);

  nock(host)
    .get('/countries')
    .query({ term: 'a' })
    .reply(200, ['albania', 'aljir']);

  const input = screen.getByRole('textbox');
  userEvent.type(input, 'a');
  const result1 = await screen.findByRole('list');
  expect(result1).toMatchSnapshot();

  nock(host)
    .get('/countries')
    .query({ term: 'al' })
    .reply(200, ['albania', 'aljir']);
  userEvent.type(input, 'l');

  await delay(10);

  const result2 = await screen.findByRole('list');
  expect(result2).toMatchSnapshot();

  nock(host)
    .get('/countries')
    .query({ term: 'alb' })
    .reply(200, ['albania']);
  userEvent.type(input, 'b');

  await delay(10);

  const result3 = await screen.findByRole('list');
  expect(result3).toMatchSnapshot();

  userEvent.clear(input);

  await delay(10);

  const result4 = screen.queryByRole('list');
  expect(result4).not.toBeInTheDocument();
});
