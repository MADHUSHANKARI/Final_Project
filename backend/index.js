require('dotenv').config()

const express = require('express')
const DbConnection = require('./database');
const cors= require('cors')

const User = require('./routes/User')
const security = require('./routes/security')
const contactDetails = require('./routes/contactDetails')

const app  = express();

//middleware
app.use(express.json());
app.use(cors())

app.use((req,res,next) => {
  console.log(req.path, req.method)
  next()
})

DbConnection();


app.use('/v1', User)
app.use('/v2', security)
app.use('/v2', contactDetails )



app.listen(process.env.PORT || 5001 , () => {
    console.log(`Port listen in ${process.env.PORT}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());




  
