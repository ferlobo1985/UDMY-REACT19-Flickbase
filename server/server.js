const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();

const { xss } = require('express-xss-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');

const routes = require('./routes');
const { handleError }  =  require('./middleware/apiError');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongoUri)

// PARSING
app.use(bodyParser.json())

// SANITIZE
app.use(xss());
app.use(mongoSanitize())

// ROUTES
app.use('/api',routes)


// ERROR HANDLING
app.use((err,req,res,next)=>{
    handleError(err,res)
})

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server runnin on port ${port}`)
});