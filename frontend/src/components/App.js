import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './Header'
import Messages from './Messages'
import { InfoBox } from './InfoBox'
import { CSSTransition } from 'react-transition-group'

class App extends Component {

  renderEmailData () {
    const { data: { messages } } = this.props

    return messages.map((message, i) => {
      return (
        <CSSTransition
          appear={true}
          in={true}
          timeout={300}
          classNames='fade'
        >
        <Messages key={i} message={message} />
        </CSSTransition>
      )
    })
  }

  render () {
    const { data: { counts } } = this.props
    return (
      <div>
        <CSSTransition
          appear={true}
          in={true}
          timeout={300}
          classNames='fade-header'
        >
        <Header counts={counts} />
        </CSSTransition>
        <CSSTransition
          appear={true}
          in={true}
          timeout={1000}
          classNames='info-box-details'
        >
        <InfoBox />
        </CSSTransition>
        <div className='messages-container'>
          {this.renderEmailData()}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  /**
   * Takes an array of objects
   */
  data: PropTypes.array
}


export default App;
