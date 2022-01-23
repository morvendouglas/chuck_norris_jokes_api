import React from 'react';
import '@testing-library/jest-dom';
import MainContainer from '../containers/MainContainer';
// import {mount, configure} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('MainContainer', () => {
  let container;
  beforeEach(() => {
    container = mount(<MainContainer/>)
  })
})

// it('should be able to generate random chuck norris joke', () => {
//     const button = container.find('#get-random-joke-button');
//     const joke = container.find('#random-joke');
//     button.simulate('click');
//     expect(joke).toEqual(!null);
// })



