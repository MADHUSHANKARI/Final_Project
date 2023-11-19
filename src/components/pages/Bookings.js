import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import './Booking.css'; // Import your CSS file for the Bookings component
import AdminNavbar from '../AdminNavbar';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch booked dates from the server
  //   axios.get('http://localhost:5001/bookings') // Replace with the actual endpoint
  //     .then(response => {
  //       setBookings(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching bookings:', error);
  //       setError('An error occurred while fetching boozkings');
  //     });
  // }, []);

  return (
    <div>
      <AdminNavbar/>
    <div className="bookings-container">
      
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="calendar">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={bookings.map(booking => ({
              title: 'Booked',
              date: new Date(booking.date).toISOString().split('T')[0]
            }))}
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default Bookings;
