const mongoose = require('mongoose')

const nflPlayerSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true},
    height: { type: String },
    weight: { type: Number },
    exp: { type: Number, required: true },
    team: {
        name: { type: String, required: true },
        logo: { type: String, required: true },
        required: true
    },
    position: { type: String },
    number: { type: Number },
    notes: { type: String }
})

const NFLPLAYER = mongoose.model('NFLPLAYER', nflPlayerSchema)

module.exports = NFLPLAYER