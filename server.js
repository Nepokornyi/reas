// import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const routes = require('./routes/api');


const app = express();
const PORT = process.env.PORT || 8080;


//DB connection
const mongodb_URI = 'mongodb+srv://admin:reas123@reas.gxzko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongodb_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () =>{
    console.log('mongoose is connected');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//HTTP request logger
app.use(morgan('tiny'));
app.use('/lead', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));
