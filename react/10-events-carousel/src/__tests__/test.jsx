import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../Carousel.jsx';

test('Carousel', () => {
  const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];
  const vdom = <Carousel images={images} />;
  const { asFragment } = render(vdom);
  expect(asFragment()).toMatchSnapshot();

  // const next = wrapper.find('.carousel-control-next');
  const next = screen.getByText('Next');
  const prev = screen.getByText('Previous');
  // const prev = wrapper.find('.carousel-control-prev');

  userEvent.click(next);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(next);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(next);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(prev);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(prev);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(prev);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(prev);
  expect(asFragment()).toMatchSnapshot();
});

test('Carousel 2', () => {
  const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'];
  const vdom = <Carousel images={images} />;
  const { asFragment } = render(vdom);
  expect(asFragment()).toMatchSnapshot();

  const next = screen.getByText('Next');

  userEvent.click(next);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(next);
  expect(asFragment()).toMatchSnapshot();

  userEvent.click(next);
  expect(asFragment()).toMatchSnapshot();
});
