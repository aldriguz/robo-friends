import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('test if Card component has been rendered', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Jhon Snow',
            username: 'jhonsnow',
            email: 'jhon@email.com'
        }
    ]

    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
