const mongoose = require('mongoose')

const rookiesSchema = new mongoose.Schema({
    img: { type: String },
    name: { type: String, required: true},
    age: { type: Number, required: true},
    height: { type: String },
    weight: { type: Number },
    team_name: { type: String },
    team_logo: { type: String },
    position: { type: String },
    number: { type: Number },
    college: { type: String, requierd: true },
    draft_capital: { type: String, required: true },
    notes: { type: String }
})

const Rookies = mongoose.model('Rookies', rookiesSchema)

module.exports = Rookies