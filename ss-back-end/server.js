// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const port = process.env.port;
const app = express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
    )

const selectionController = require('./controller/selection_controller.js')
app.use('/selections', selectionController) //localhost:9800/selections




app.listen(port, () => {
    console.log('Supremium Selections')
})