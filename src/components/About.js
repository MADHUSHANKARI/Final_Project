import React from 'react';
import './About.css';
import Navbar from './Navbar';
const About= () => {
  return (
    <div>
      <Navbar/>
    <div className="about">
      <h2>About Us</h2>
      <p>We are a company that does amazing things.</p>
    </div>
    </div>
  );
}

export default About;
