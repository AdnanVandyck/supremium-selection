const mongoose = require('mongoose')
const { Schema } = mongoose

const selectionSchema = new Schema({
    selection_name: {type: String},
    colorway: {type: String},
    flight_club_price: {type: Number},
    stadium_goods_price: {type: Number},
    stockx_price: {type: Number},
    goat_price: {type: Number},

})

const Selection = mongoose.model("Selection", selectionSchema)

module.exports = Selection