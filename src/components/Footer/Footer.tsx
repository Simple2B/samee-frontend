import React, { ReactElement } from 'react'
import './footer.css'


export default function Footer(): ReactElement {
  return (
    <div className="footer">
      <a className="footer_link" href="#">Some link</a>
      <a className="footer_link" href="#">Some link</a>
    </div>
  )
}
