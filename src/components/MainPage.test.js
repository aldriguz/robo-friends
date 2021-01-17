import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {

    const mockStore = {
        onRequestRobots: jest.fn(),
        searchField: '',
        robots: [],
        isPending: false
    };
    
    wrapper = shallow(<MainPage { ...mockStore}/>);
});

it('renders MainPage without crash', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filter robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
})

it('filter robots correctly with param ', () => {
    const mockStore = {
        onRequestRobots: jest.fn(),
        searchField: 'john',
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@email.com'
        }],
        isPending: false
    };

    wrapper = shallow(<MainPage { ...mockStore}/>);

    expect(wrapper.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@email.com'
    }]);
})

it('filter robots correctly with param ', () => {
    const mockStore = {
        onRequestRobots: jest.fn(),
        searchField: 'john',
        robots: [],
        isPending: true
    };

    wrapper = shallow(<MainPage { ...mockStore}/>);
    expect(wrapper.contains(<h1>Loading</h1>)).toEqual(true);
})