const express = require('express')
const app  = express();
const DbConnection = require('./database');
const cors= require('cors')
const mongoose = require('mongoose');
// const security = require('./routes/security')


require('dotenv').config()

DbConnection();
app.use(express.json())
app.use(cors())

app.use('/v1',require('./routes/User'))



app.listen(process.env.PORT || 5001 , () => {
    console.log(`Port listen in ${process.env.PORT}`);
});

