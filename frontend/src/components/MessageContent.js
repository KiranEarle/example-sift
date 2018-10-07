import React from 'react'
import PropTypes from 'prop-types'
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
      {closeModal &&
        <button onClick={() => closeModal()}>Close</button>
      }
      </div>}
    </div>
  )
}

MessageContent.PropTypes = {
  /**
   * takes a string for the header.
   */
  header: PropTypes.string,

  /**
   * takes an object with details of message.
   */
   message: PropTypes.object,

  /**
   * function that is passed in if the content is a modal
   * to be passed in as an onclick function on a button,
   * will not render the button if not passed as a prop.
   */
  closeModal: PropTypes.func,

  /**
   * boolean which checkes if user wants all the details
   * to be shown.
   */

}

export default MessageContent