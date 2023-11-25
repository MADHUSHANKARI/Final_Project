
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Contact.css"
import Navbar from './Navbar';
import ContactDetails from './contactDetails';

const Contact=() =>{
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        email: '',
    });

    useEffect(() => {
        const fetchContactInfo = async()=>{
            const response = await fetch('/v2/update-contact-details')
            const json = await response.json()

            if(response.ok){
                setContactInfo(json)
            }

        }
        fetchContactInfo()
        
        // axios.get('http://localhost:5001/v1/contact-details')
        //   .then(response => {
        //     const { phone, email } = response.data;
        //     setContactInfo({ phone, email });
        //   })
        //   .catch(error => {
        //     console.error('Error fetching contact information:', error);
        //   });
      }, []);

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
                    {/* {contactInfo && contactInfo.map((contactDetails)=>(
                       <ContactDetail key={contactDetails._id} contactDetails={contactDetails} />
                    ))} */}


                    <p className='paragarph'id="phonenumber">Phone: {contactInfo.phone}</p>
                    <p className='paragarph' id="contactemail">Email: {contactInfo.email}</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;
