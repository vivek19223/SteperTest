import React from 'react';
import {shallow} from 'enzyme';
import Steper from './Steper';

beforeEach (() => {
  wrapper = shallow (<Steper />);
});

test ('Should render Steper correctly', () => {
  expect (wrapper).toMatchSnapshot ();
});
