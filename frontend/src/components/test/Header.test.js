import React from 'react'
import Header from '../Header'

it('render with props without blowing up', () => {

  const props = {
    messageTotal: 23,
    wordTotal: 343,
    wpmTotal: 433
  }

  const component = shallow(<Header counts={props} />);
  expect(component).toMatchSnapshot();
});