import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lodash';

import Buttons from '../Buttons.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Test app buttons', () => {
  it('default props', () => {
    const wrapper = mount(<Buttons />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('buttons clicks', () => {
    const count = 4;

    const wrapper = mount(<Buttons count={count} />);
    expect(wrapper.render()).toMatchSnapshot();

    const buttons = wrapper.find('button');
    buttons.forEach((node, index) => {
      _.times(index * 2 + 1, () => node.simulate('click'));
    });
    expect(wrapper.render()).toMatchSnapshot();
  });
});
