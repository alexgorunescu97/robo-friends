import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
        error: ''
    }
    wrapper = shallow(<MainPage {...mockProps} s/>);
});

it('expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('expect robots to be filtered correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false,
        error: ''
    }
    let wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('expect robots to be filtered correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false,
        error: ''
    }
    let wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual([]);
});

it('expect to render MainPage component when the page is loading', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true,
        error: ''
    }
    let wrapper4 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper4).toMatchSnapshot();
});