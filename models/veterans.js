const mongoose = require('mongoose')

const veteransSchema = new mongoose.Schema({
    img: { type: String },
    name: { type: String, required: true},
    age: { type: Number, required: true},
    height: { type: String },
    weight: { type: Number },
    exp: { type: Number, required: true },
    team_name: { type: String },
    team_logo: { type: String },
    position: { type: String, required: true },
    number: { type: Number },
    notes: { type: String }
})

const Veterans = mongoose.model('Veterans', veteransSchema)

module.exports = Veterans