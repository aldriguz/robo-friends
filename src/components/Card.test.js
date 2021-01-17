import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('test if Card component has been rendered', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})
