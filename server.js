const express = require('express')
const APP = express()
const PORT = 3000

APP.get('/ffnotebook', (req, res) => {
    res.send('Succesfully got to the ffn landing page')
})



APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})