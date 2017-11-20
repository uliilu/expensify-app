import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// react-test-renderer

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
