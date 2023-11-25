const express = require('express')
const cors= require('cors')
const DbConnection = require('./database');
const mongoose = require('mongoose');
const security = require('./routes/security')
const settings = require('./routes/settings')
//const contactRoutes = require('./routes/contacts')

const app  = express();

//middleware
app.use(express.json());
app.use(cors())



require('dotenv').config()

DbConnection();


app.use('/v1',require('./routes/User'))
app.use('/v2', security)
app.use('/v2', settings )
//app.use('/v3/contacts' , contactRoutes)


app.listen(process.env.PORT || 5001 , () => {
    console.log(`Port listen in ${process.env.PORT}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

// CORS handling (allowing requests from localhost:3000, adjust as needed)
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

  app.post('/v2/update-contact-details', (req, res) => {
    const { newPhoneNumber, newEmail } = req.body;
  
    // Respond with a success message
    res.status(200).json({ message: 'Contact details updated successfully.' });
  });
  
  






// Example endpoint to retrieve contact details
// app.get('/v1/contact-details', (req, res) => {
//     // Assuming you have a database to fetch contact details
//     // Replace this with your actual database logic
//     const contactDetails = {
//       phone: 'your phone value from the database',
//       email: 'your email value from the database',
//     };
  
//     res.status(200).json(contactDetails);
//   });