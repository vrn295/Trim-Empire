import React from 'react';
import Logo from '../Media/TRIM-white.png'
import "./Footer.css";
import Insta from '../Media/instagram.png';
import Facebook from '../Media/facebook.png';
import Twitter from '../Media/twitter.png';
 
const Footer = () => {
    return(
        <footer>

            <div className='footer-left'>
              <img className='footer-logo' src={Logo} alt="logo"/>
              <div className='footer-social-media'>
                  <img className='social-media-logo' src={Insta} alt="Instagram"/>
                  <img className='social-media-logo' src={Facebook} alt="Facebook"/>
                  <img className='social-media-logo' src={Twitter} alt="Twitter"/>
              </div>
            </div>
            <div className='footer-hours'>
              <h3>Hours</h3>
              <p>
                Tues-Fri 9:00am-6:00pm
                Sat 9:00am-3:00pm</p>
                <p>Closed Sun & Mon</p>
            </div>
            <div className='footer-location'>
              <h3>Location</h3>
              <p>
                C-47, Nodia,
              </p>
                <p>
                Uttar Pradesh,
                India</p>
            </div>
          </footer>
    )
}

export default Footer;