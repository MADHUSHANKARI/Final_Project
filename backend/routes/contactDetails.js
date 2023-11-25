// const ContactDetails = require('../models/contactDetailsSchema');
const express = require('express');
const createContact = require('../controllers/contactController')
const router = express.Router();


router.post('/update-contact-details', createContact)

module.exports = router;
