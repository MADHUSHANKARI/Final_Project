import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import companyLogo from './images/company-logo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={companyLogo} alt="Company Logo" />      
        </Link>
      </div>
      <ul className="navbar-links">
        
          
          <Link className='home' to="/home"> Home</Link>
          <Link className='about' to="/about">About</Link>
          <Link className='login' to="/Login"> Login</Link>
        
      </ul>
    </nav>
  );
}

export default Navbar;
