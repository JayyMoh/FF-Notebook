const express = require('express')
const APP = express()
const PORT = 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Veterans = require('./models/veterans.js')

//middleware
APP.use(express.urlencoded({extended: true}));
APP.use(methodOverride('_method'));


// mongoose middleware
mongoose.connect('mongodb://localhost:27017/ffnotebook', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
});


// ===== Main Page (index) =====
APP.get('/ffnotebook', (req, res) => {
    res.render('index.ejs')
})

// ===== Veterans Page =====
APP.get('/ffnotebook/veterans', (req, res) => {
    Veterans.find({}, (error, allVets) => {
        res.render('veterans.ejs', {
            veterans: allVets
        })
    })
})

// ===== New Vet =====
APP.get('/ffnotebook/new/veteran', (req, res) => {
    res.render('new_vet.ejs')
})

// ===== Rookie Page =====
APP.get('/ffnotebook/rookies', (req, res) => {
    res.render('rookies.ejs')
})

// ===== Devy Page =====
APP.get('/ffnotebook/devy', (req, res) => {
    res.render('devy.ejs')
})

// ===== New View =====


// ===== Create =====


// ===== Show =====


// ===== Edit =====


// ===== Update =====


// ===== Destroy =====

APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})