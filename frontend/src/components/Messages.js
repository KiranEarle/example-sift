import React, { Component } from 'react'
import MessageContent from './MessageContent'
import { condenseHeaderText } from '../helpers/condenseHeaderText'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

Modal.setAppElement('#root')

class Messages extends Component {
  static Text = MessageContent

  constructor() {
    super()
    this.state = {
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }


  renderHeader (message) {
    return (
      <div className='condensed-header'>
        <h2 className='message-header'>{condenseHeaderText(message)}</h2>
        <span className='expand-hide' onClick={() => this.openModal()}>More details</span>
      </div>
    )
  }


  render () {
    const { message } = this.props
    return (
      <div className='messages'>
        <Messages.Text header={this.renderHeader(message.body)} message={message} />
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        className='modal'
        overlayClassName='modal-overlay'>
          <Messages.Text header={message.body} message={message} fullDetails closeModal={this.closeModal} />
        </Modal>
      </div>
    )
  }
}

Messages.PropTypes = {
  /**
   * Takes an object with the message properties
   */
  message: PropTypes.object
}

export default Messages