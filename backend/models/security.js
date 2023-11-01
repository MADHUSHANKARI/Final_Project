const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter FirstName']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter LastName']
    },
    nic: {
        type: String,
        required: [true, 'Please enter nic'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
    },
    mobilenumber: {
        type: String,
        required: [true, 'please enter mobilenumber'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const bookingSchema = new mongoose.Schema({
    date: Date,
    userEmail: String,
});

const Security = mongoose.model('security', securitySchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = {
    Security,
    Booking
};


