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

// ===== VETERANS SECTION =====

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

// ===== Create Vet =====
APP.post('/ffnotebook/veterans', (req, res) => {
    Veterans.create(req.body, (error, createdVet) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Here is your added Vet: ', createdVet)
        }
        res.redirect('/veterans')
    })
})

// ===== Edit Vet =====

// ===== Delete Vet =====

// --------------------------------

// -------- ROOKIE SECTION ---------

// ===== Rookie Page =====
APP.get('/ffnotebook/rookies', (req, res) => {
    res.render('rookies.ejs')
})

// ===== Add Rookie =====

// ===== Create Rookie =====

// ===== Edit Rookie =====

// ===== Delete Rookie =====


// ---------------------------------

// -------- DEVY SECTION -----------

// ===== Devy Page =====
APP.get('/ffnotebook/devy', (req, res) => {
    res.render('devy.ejs')
})

// ===== Add Devy =====

// ===== Create Devy =====

// ===== Edit Devy =====

// ===== Delete Devy =====


// ----------------------------------


APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})