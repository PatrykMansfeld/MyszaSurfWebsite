import React from 'react'

function Footer() {
  return (
    <div className='footer-box'>
      <div className='footer-sections'>
        <div className='footer-contact'>
          <h3>Contact</h3>
          <ul className='footer-contact-list'>
            <li>Phone: 123 456 789</li>
            <li>Email: sayhello@mysza.pro</li>
            <label>Godziny otwarcia</label>
            <li>Poniedziałek - Niedizela 11:00 - 19:00</li>
          </ul>
        </div>
        <div>
          <h3>Menu</h3>
          <ul className='footer-menu-list'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer