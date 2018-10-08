import React from 'react'
import { InfoBox } from '../InfoBox'

it('render without blowing up', () => {

  const component = render(<InfoBox />);
  expect(component).toMatchSnapshot();
});