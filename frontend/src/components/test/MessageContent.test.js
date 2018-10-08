import React from 'react'
import MessageContent from '../MessageContent'

it('render with props without blowing up', () => {
  const header = 'text'
  const message = {
    body: 'text',
    id: "text",
    subject: "more text",
    threadId: "even more text",
    wordCount: 198
  }

  const component = shallow(<MessageContent header={header} message={message} />);
  expect(component).toMatchSnapshot();
});