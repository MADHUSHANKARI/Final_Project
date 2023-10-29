import React from 'react';
import './User.css'
import UserNavbar from './UserNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const User = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('valid');
    localStorage.removeItem('email');
    // Update the authentication status to false
    setIsLoggedIn(false);
    // Redirect to the login page after logout
    // Replace '/login' with the actual route for your login page
    window.location.href = '/login';
  };
  
  return (
    <div>
      <UserNavbar handleLogout={handleLogout} />
      <div className="container">
      <div className="row">
        <div className="col-md-7">
          <img src="/image/hall.jpg" className="img-fluid custom-image" />
        </div>

        <div className="col-md-5">
          
          <p className="custom-text">
          <b>Welcome to our user-friendly design platform! </b><br/>
          Our interface offers a seamless and intuitive experience to bring your creative ideas to life. 
          With an elegant and modern design, you'll find all the tools you need to craft stunning visuals and concepts
          </p>
          <p className="custom-text">
          Whether you're a seasoned designer or a newbie, our platform is designed to cater to your needs. 
          Ready to unleash your imagination? Click the "Try Design" button and let your creativity flow!
          </p>
          <Link to="/layout" state={{}}>
          <button className="btn btn-primary custom-button">Try Design</button>
          </Link>
        </div>
      </div>
    </div>

        
      </div>
    
      
    
  );
};
export default User;