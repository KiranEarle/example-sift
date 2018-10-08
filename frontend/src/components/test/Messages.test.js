import React from 'react'
import Messages from '../Messages'

it('render with props without blowing up', () => {

  const message = {
    body: 'text',
    id: "text",
    subject: "more text",
    threadId: "even more text",
    wordCount: 198
  }

  const component = shallow(<Messages message={message} />);
  expect(component).toMatchSnapshot();
});