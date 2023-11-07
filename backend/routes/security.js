const securitySchema = require('../models/security');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();


// Function to create the admin account if it doesn't exist
// const createAdminAccount = async () => {
//     const adminEmail = 'divesh@gmail.com';
//     const adminPassword = 'divesh123';

//     const existingAdmin =  securitySchema.findOne({ email: adminEmail });

//     if (!existingAdmin) {
//         const hashedPassword = await bcrypt.hash(adminPassword, 10);

//         const admin = new securitySchema({
//             email: adminEmail,
//             password: hashedPassword,
//         });

//         await admin.save();
//     }
// };

// // Call the createAdminAccount function
// createAdminAccount().then(() => {
//     console.log('Admin account created or already exists.');
// });

// Route for changing the admin's email and password
router.post('/change-password', async (req, res) => {
    const email = req.body.Email;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword
    try {
        // Find the admin user by email and isAdmin
        const admin = await securitySchema.findOne({ email });

        if (!admin) {
            return res.status(401).json('Admin not found');
        }

        // Check if the current password is correct
        const isPasswordValid = bcrypt.compare(currentPassword, admin.password);


        if (!isPasswordValid) {
            return res.status(401).json('Incorrect current password');
        }

        // Update the password with the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedNewPassword;
         admin.save();

        return res.status(200).json('PasswordChanged');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Error occurred while changing the password');
    }
});



module.exports = router;
