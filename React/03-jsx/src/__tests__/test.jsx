import renderer from 'react-test-renderer';
import getCard from '../Card.jsx';

test('Card 1', () => {
  const params = {
    title: 'title 1',
    text: 'text 1',
  };
  const vdom = getCard(params);
  const component = renderer.create(vdom);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card 2', () => {
  const params = {
    title: 'title 1',
    text: 'text 1',
  };
  const vdom = getCard(params);
  const component = renderer.create(vdom);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card 3', () => {
  const params = {
  };
  const vdom = getCard(params);
  expect(vdom).toBeNull();
});

test('Card 4', () => {
  const params = {
    title: 'title 1',
  };
  const vdom = getCard(params);
  const component = renderer.create(vdom);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card 5', () => {
  const params = {
    text: 'text 1',
  };
  const vdom = getCard(params);
  const component = renderer.create(vdom);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
