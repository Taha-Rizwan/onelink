import React from 'react'
import './footerStyles.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <div className="meh">
        <h1>One Link</h1>
        <p>A More Rewarding Way To Travel.</p>
      </div>
     
      <div className="media">
        <h1>Social Media</h1>
        <a href="https://www.facebook.com/OneLinkTravelandtour/"> <FacebookIcon fontSize="large" /></a>
        <a href="https://www.instagram.com/onelink_travelandtour/"><InstagramIcon fontSize="large" /></a>
        
      </div>
    </div>
  )
}

export default Footer
