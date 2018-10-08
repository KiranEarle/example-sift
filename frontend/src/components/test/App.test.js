import React from 'react'
import App from '../Header'

it('render with props without blowing up', () => {

  const data = {
    counts: {
      messageTotal: '23',
      wordTotal: '343',
      wpmTotal: '433'
    },
    messages: [
      {
        body: 'text',
        id: "text",
        subject: "more text",
        threadId: "even more text",
        wordCount: 198
      }
  ]}

  const component = shallow(<App {...data} />);
  expect(component).toMatchSnapshot();
});