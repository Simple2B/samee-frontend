import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import ProgressBarWrapper from '../ProgressBarWrapper/ProgressBarWrapper';
import './bar.css';

export default function Bar(): ReactElement {
  return (
    <div className="bar">
      <div className="bar_logo">
        <img src="/image/logo.png" className="logo_img" alt="logo" />
      </div>
      <div className="bar_contacts">
        <span className="contacts_text">Besoin d'aide ?</span>
        <a href="mailto:contact@samee.ch">
          <img src="/image/mail.png" className="contact_mail" alt="mail" />
        </a>
        <a href="tel:+41782231082">
          <img src="/image/phone.png" className="contact_phone" alt="phone" />
        </a>
      </div>
    </div>
  );
}
