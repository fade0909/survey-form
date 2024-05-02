const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const surveyRouter = require('./routes/surveyRoute.js')
const app = express();


const PORT = 3333;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTE HERE
app.use('/api', surveyRouter);

// CONNECTION TO MONGO DB 
mongoose.connect('mongodb://localhost:27017/surveyform')

// PORT SECTION
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
