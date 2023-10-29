import React from 'react';
import './Admin.css'
import AdminNavbar from './AdminNavbar';

const Admin = ({ setIsLoggedIn }) => {
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
        <AdminNavbar handleLogout={handleLogout} />

    )
};

export default Admin;
