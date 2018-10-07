import React from 'react'
import { getReturnPathDomain } from '../helpers/getReturnPathDomain'

const MessageContent = ({header, message, closeModal, fullDetails}) => {
  const sender = message.sender ? message.sender.email : 'No email sender details found'
  const spf = message.emailHeader ? message.emailHeader.spf : 'No SPF details found'
  const dkim = message.emailHeader ? message.emailHeader.dkim : 'No dkim details found'

  const returnPathDomain = getReturnPathDomain(dkim)

  return (
    <div>
      <div className='expanded-header'>
      < h2 className='message-header'>{header}</h2>
      </div>
      <p className='message-subject'>Subject: {message.subject}</p>
      {fullDetails &&
      <div className='full-details'>
      <ul>
        <li><span className='detail-title'>Word count:</span> {message.wordCount}</li>
        <li><span className='detail-title'>id:</span>  {message.id}</li>
        <li><span className='detail-title'>thread id:</span>  {message.threadId}</li>
      </ul>
      <h3 className='dmarc-title'>DMARC information</h3>
      <ul>
        <li><span className='detail-title'>from: </span>{sender}</li>
        <li><span className='detail-title'>Return Path Domain: </span>{returnPathDomain}</li>
        <li><span className='detail-title'>SPF: </span>{spf}</li>
        <li><span className='detail-title'>DKIM: </span>{dkim}</li>
      </ul>
        <button onClick={() => closeModal()}>Close</button>
      </div>}
    </div>
  )
}

export default MessageContent