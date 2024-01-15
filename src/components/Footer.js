// ** Disho ** //

import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-company-details'>
            <h2>My Hall Vision</h2>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            <div className='social-icons'>
              <FacebookIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>
            </div>
          </div>
          <div className='footer-company-details'>
            <h2>Quick links</h2>
            <ul className='list-contents'>
              <li className='list'><HomeIcon/><a>
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              </a></li>
              <li className='list'>
                
                <ApartmentIcon/><a>
                <Link className="nav-link" to="/about">

                About </Link>

              </a></li>
              <li className='list'>
              <CallIcon/><a>
              <Link className="nav-link" to="/Contact">
                Contact-Us
              </Link>
              </a></li>

            </ul>

          </div>
          <div className='footer-company-details'>
            <h2>Contact</h2>
            <p>123 Main Street, Colombo</p>
            <p>011 5111 122</p>
            <p>myhallvision@gmail.com</p>
          </div>

        </div>
        <div className='footer-terms'>
          All Rights Reserved @myhallvision 2023
        </div>
      </div>
    </>
  );
}

export default Footer;
