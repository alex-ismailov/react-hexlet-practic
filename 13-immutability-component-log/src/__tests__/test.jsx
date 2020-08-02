import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from '../Component.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('Component', () => {
  const wrapper = mount(<Component />);
  expect(wrapper.render()).toMatchSnapshot();

  const inc = wrapper.find('.hexlet-inc');
  const dec = wrapper.find('.hexlet-dec');

  inc.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  const items1 = wrapper.find('.list-group-item-action');
  items1.at(1).simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  const items2 = wrapper.find('.list-group-item-action');
  items2.at(1).simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
