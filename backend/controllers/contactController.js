const mongoose = require('mongoose')
const ContactDetails = require('../models/contactDetailsSchema');

const createContact = async(req, res) =>{
     const { newPhoneNumber, newEmail } = req.body;
     try {
         const contactDetails = await ContactDetails.create(
            {newPhoneNumber,newEmail})
         res.status(200).json('Contact details updated successfully');
       } catch (error) {
          console.error(error);
           return res.status(400).json('Error updating contact details');
       }

}
module.exports = createContact


