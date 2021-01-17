import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('CounterButton stateful test component', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);

    wrapper.find('[id="counter"]').simulate('click');
    //expect(wrapper.state).toEqual({count: 1});
    //expect(wrapper.state().count).toEqual(1);
    expect(wrapper.state('count')).toEqual(1);
});