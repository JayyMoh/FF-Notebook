const express = require('express')
const APP = express()
const PORT = 3000

// ===== Index View =====
APP.get('/ffnotebook', (req, res) => {
    res.render('index.ejs')
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