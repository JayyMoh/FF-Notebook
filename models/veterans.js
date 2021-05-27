const mongoose = require('mongoose')

const veteransSchema = new mongoose.Schema({
    img: { type: String },
    name: { type: String, required: true},
    age: { type: Number, required: true},
    height: { type: String },
    weight: { type: Number },
    exp: { type: Number, required: true },
    team_name: { type: String, required: true },
    team_logo: { type: String, required: true },
    position: { type: String },
    number: { type: Number },
    notes: { type: String }
})

const Veterans = mongoose.model('Veterans', veteransSchema)

module.exports = Veterans