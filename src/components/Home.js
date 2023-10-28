import React from 'react';
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page content.</p>
    </div>
    </div>
  );
}

export default Home;
