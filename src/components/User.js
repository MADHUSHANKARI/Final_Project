import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './User.css';
import UserNavbar from './UserNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const User = ({ setIsLoggedIn }) => {
  const [bookingDate, setBookingDate] = useState(null);
  const bookedDates = [new Date(2023, 10, 10), new Date(2023, 10, 15)]; // Sample booked dates

  const handleDateSelect = (date) => {
    // Logic to check if the date is available for booking
    // If available, set the booking date
    // Otherwise, show a message indicating that the date is not available
    setBookingDate(date);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('valid');
    localStorage.removeItem('email');
    // Update the authentication status to false
    setIsLoggedIn(false);
    // Redirect to the login page after logout
    // Replace '/login' with the actual route for your login page
    window.location.href = '/';
  };

  const navigate = useNavigate();
  const handleNotificationClick = () => {
    // Use the navigate function to redirect to the /notification route
    navigate('/notification');
  };

  return (

    <div>
      
      <UserNavbar handleLogout={handleLogout} />
      
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src="/image/hall.jpg" className="img-fluid custom-image" alt="Hall" />
          </div>

          <div className="col-md-5">
            <p className="custom-text">
              <b>Welcome to our user-friendly design platform! </b>
              <br />
              Our interface offers a seamless and intuitive experience to bring your creative ideas to life. With an elegant and modern design, you'll find all the tools you need to craft stunning visuals and concepts
            </p>
            <p className="custom-text">
              Whether you're a seasoned designer or a newbie, our platform is designed to cater to your needs. Ready to unleash your imagination? Click the "Try Design" button and let your creativity flow!
            </p>

            <div style={{ marginBottom: "20px", }}>
              <p className='date'>Book a Date:</p>
              <DatePicker
                selected={bookingDate}
                onChange={handleDateSelect}
                minDate={new Date()}
                filterDate={(date) => {
                  // Logic to check if the date is available for booking
                  return !bookedDates.some((bookedDate) => new Date(bookedDate).toDateString() === date.toDateString());
                }}
                dateFormat="MM/dd/yyyy"
              />
            </div>
            {bookingDate ? (
              <Link to="/layout" state={{}}>
                <button className="btn btn-primary custom-button">Try Design</button>
              </Link>
            ) : null}
             
          </div>
        </div>
      </div>
      

    </div>

   
  );
};

export default User;
