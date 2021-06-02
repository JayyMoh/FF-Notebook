const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()

// App Configuration
const APP = express()
const PORT = process.env.PORT

// connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ffnotebook'

// Middleware
APP.use(express.urlencoded({extended: true}))
APP.use(express.json())
APP.use(methodOverride('_method'))

// Mongoose 
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
 })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// ===== Redirects index to main page =====
APP.get('/', (req, res) => {
    res.redirect('/ffnotebook')
})

// ===== Main Page (index) =====
APP.get('/ffnotebook', (req, res) => {
    res.render('index.ejs')
})

// Controllers
const veteranController = require('./controllers/veteran_controller.js')
APP.use('/veterans', veteranController)

const rookieController = require('./controllers/rookie_controller.js')
APP.use('/rookies', rookieController)

const devyController = require('./controllers/devy_controller.js')
APP.use('/devy', devyController)

// Port 
APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})