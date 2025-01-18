const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


// Import Routes
const userRoutes = require('./routes/user');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI) 
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err)
});

// middleware
app.use('/api', userRoutes);


const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});