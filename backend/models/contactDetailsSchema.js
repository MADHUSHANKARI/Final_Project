
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    newEmail: { 
        type: String, 
        required: true 
    },
    newPhoneNumber: { 
        type: String, 
        required: true 
    }
})

module.exports = mongoose.model('Contact',contactSchema)