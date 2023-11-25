const mongoose = require('mongoose')
// const Contact = require('../models/contactModel');

// const createContact = async(req, res) =>{
//     // Extract the new contact details from the request body
//     const { newPhoneNumber, newEmail } = req.body;
//     try {
//         const contact = await Contact.create({
//           newPhoneNumber,
//           newEmail
//         })
//         res.status(200).json('Contact details updated successfully');
//       } catch (error) {
//           console.error(error);
//           return res.status(400).json('Error updating contact details');
//       }

// }

// module.exports={createContact}

//**************************************** */

// router.post('/update-contact-details',  async (req, res) => {
//     try {
//         // Extract the new contact details from the request body
//         const { newPhoneNumber, newEmail } = req.body;

//         const contactDetails = new ContactDetails({
//           newPhoneNumber,
//           newEmail,
//         });
//         await contactDetails.save();
        
//         return res.status(200).json('Contact details updated successfully');
//       } catch (error) {
//           console.error(error);
//           return res.status(500).json('Error updating contact details');
//       }
//   });
