const express = require('express')
const APP = express()
const PORT = 3000

// ===== Main Page (index) =====
APP.get('/ffnotebook', (req, res) => {
    res.render('index.ejs')
})

// ===== Veterans Page =====
APP.get('/ffnotebook/veterans', (req, res) => {
    res.render('veterans.ejs')
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