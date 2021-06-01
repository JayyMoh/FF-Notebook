const mongoose = require('mongoose')

const devySchema = new mongoose.Schema({
    img: { type: String },
    name: { type: String, required: true},
    age: { type: Number, required: true},
    height: { type: String },
    weight: { type: Number },
    high_School: { type: String },
    college: { type: String },
    position: { type: String },
    star_recruit: { type: String },
    notes: { type: String }
})

const Devy = mongoose.model('Devy', devySchema)

module.exports = Devy