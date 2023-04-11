
const express = require('express');
const selections = express.Router()

const Selection = require("../models/selection")

selections.get("data/seed", async (req, res) => { //locahost:9080/selections/data/seed
    await Selection.insertMany() //pass in fake data / array pf objects

    //res.redirect("/")
})

module.exports = selections