import React from 'react';
import './contacts.styles.scss'

const Contacts = () => {
  return (
    <div className='information'>
      <div class='information__box'>
        <a href='https://t.me/Tlatoany' target='_blank'>@Tlatoani </a>
        <i class="fab fa-telegram-plane"></i>
      </div>
      <div class='information__box'>
        <a href="mailto:noticethatred@gmail.com" target='_blank'>noticethatred@gmail.com </a>
        <i class="fas fa-at"></i>
      </div>
    </div>
  )
}

export default Contacts;