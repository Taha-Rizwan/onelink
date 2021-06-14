import React from 'react'
import './contactStyles.css'

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactBg">
        <img src="https://images.pexels.com/photos/1590114/pexels-photo-1590114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" className="contactImage"/>
      </div>
      <div className="contactContent">
        <div className="contactItems">
          <h1 className="contactHeader">Contact Us</h1>
          <h3 className="contactEmail">Email us at: info@onelink.com</h3>
          <h1 className="or">Or</h1>
          <h3 className="contactEmail">Call us at: +923346582992</h3>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
