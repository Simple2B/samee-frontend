import React, { ReactElement } from 'react'
import './bar.css'


export default function Bar(): ReactElement {
  return (
    <div className="bar">
      <div className="bar_logo">
        <img src="/image/logo.png" className="logo_img" alt="logo" />
      </div>
      <div className="bar_contacts">
        <span className="contacts_text">
          Besoin d'aide ?
        </span>
        <a href="mailto:"><img src="/image/mail.svg" className="contact_mail" alt="mail" /></a>
        <a href="tel:"><img src="/image/phone.svg" className="contact_phone" alt="phone" /></a>
      </div>
    </div>
  )
}
