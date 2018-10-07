import React from 'react'
import PropTypes from 'prop-types'

const Header = ({counts}) => {
  return (
    <div className='header'>
      <div className='header-stats'>
      <h2>Message Total</h2>
        <div>{counts.messageTotal}</div>
      </div>
      <div className='header-stats'>
      <h2>Word Total</h2>
        <div>{counts.wordTotal}</div>
      </div>
      <div className='header-stats'>
      <h2>Total</h2>
        <div>{counts.wpmTotal}</div>
      </div>
    </div>
  )
}

Header.PropTypes = {
  /**
   * Takes in an object containing details of the messages
   */
  counts: PropTypes.object
}

export default Header