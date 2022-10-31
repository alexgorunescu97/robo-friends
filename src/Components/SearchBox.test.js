import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
    const testSearchField = 'test';
    expect(shallow(<SearchBox searchfield={testSearchField}/>)).toMatchSnapshot();
});