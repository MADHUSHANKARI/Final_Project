const ContactDetails = require('../models/contactDetailsSchema');
const express = require('express');

const router = express.Router();





// ****** Admin's settings page: change contact Details
router.post('/update-contact-details',  async (req, res) => {
    try {
        // Extract the new contact details from the request body
        const { newPhoneNumber, newEmail } = req.body;

        const contactDetails = new ContactDetails({
          newPhoneNumber,
          newEmail,
        });
        await contactDetails.save();
        
        return res.status(200).json('Contact details updated successfully');
      } catch (error) {
          console.error(error);
          return res.status(500).json('Error updating contact details');
      }
  });

  module.exports = router;
