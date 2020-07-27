import React from 'react';
import renderer from 'react-test-renderer';
import Definitions from '../Definitions.jsx';

test('Definitions 1', () => {
  const definitions = [
    { dt: 'one', dd: 'two' },
    { dt: 'another term', dd: 'another description' },
  ];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Definitions 2', () => {
  const definitions = [
    { dt: 'one', dd: 'two' },
  ];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Definitions 3', () => {
  const definitions = [
    { dt: 'another term', dd: 'another description' },
    { dt: 'one', dd: 'two' },
  ];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Definitions 4', () => {
  const definitions = [];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
