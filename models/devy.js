const mongoose = require('mongoose')

const devy = new mongoose.Schema({
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