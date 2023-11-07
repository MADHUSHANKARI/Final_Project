import React from 'react';
import "./Contact.css"
import Navbar from './Navbar';

function Contact() {
    return (
        <div>
            <Navbar/>
            <div className="container4">
                <h1>Contact Us</h1>
                <p className='paragarph'>Get directions to our event center</p>

                <div className="address">
                    <h2>Address:</h2>
                    <p className='paragarph'>136 Pascale dso Apt. 339, DS City</p>
                    <p className='paragarph'>United States</p>
                </div>

                <div className="contact-info">
                    <h2>Contact Information:</h2>
                    <p className='paragarph'>Phone: (+12)-33-67-8440</p>
                    <p className='paragarph'>Email: info.colorlib@gmail.com</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;
