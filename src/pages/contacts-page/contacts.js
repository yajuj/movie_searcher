import React from 'react';
import './contacts.styles.scss'

const Contacts = () => {
  return (
    <div className='information'>
      <div className='information__box'>
        <i className="fab fa-telegram-plane"></i>
        <a href='https://t.me/Tlatoany' target='_blank'> Tlatoani </a>
      </div>
      <div className='information__box'>
        <i className="fas fa-at"></i>
        <a href="mailto:noticethatred@gmail.com"> noticethatred@gmail.com </a>
      </div>
    </div>
  )
}

export default Contacts;