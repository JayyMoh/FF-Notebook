const express = require('express')
const APP = express()
const PORT = 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Veterans = require('./models/veterans.js')
const Rookies = require('./models/rookies.js')
const Devy = require('./models/devy.js')

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


// ===================================
// ------- VETERAN SECTION ------------
// ===================================

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
        res.redirect('/ffnotebook/veterans')
    })
})

// ===== Show Vet =====
APP.get('/ffnotebook/veterans/:id', (req, res) => {
    Veterans.findById(req.params.id, (err, foundVet) => {
        res.render('show_vet.ejs', {
            veterans: foundVet
        })
    })
})


// ===== Find Vet to Edit =====
APP.get('/ffnotebook/veterans/:id/edit', (req, res) => {
    Veterans.findById(req.params.id, (err, editVet) => {
        res.render('edit_vet.ejs', {
            veterans: editVet
        })
    })
})

// ===== Edit the Vet =====
APP.put('/ffnotebook/veterans/:id', (req, res) => {
    Veterans.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedVet) => {
        console.log(updatedVet)
        res.redirect('/ffnotebook/veterans')
    })
})

// ===== Delete Vet =====
APP.delete('/ffnotebook/veterans/:id', (req, res) => {
    Veterans.findByIdAndRemove(req.params.id, (err, deletedVet) => {
        console.log('Deleted Player: ', deletedVet)
        res.redirect('/ffnotebook/veterans')
    })
})



// ================================
// -------- ROOKIE SECTION --------
// ================================

// ===== Rookie Page =====
APP.get('/ffnotebook/rookies', (req, res) => {
    Rookies.find({}, (error, allRookies) => {
        res.render('rookies.ejs', {
            rookies: allRookies
        })
    })
})

// ===== New Rookie =====
APP.get('/ffnotebook/new/rookies', (req, res) => {
    res.render('new_rook.ejs')
})

// ===== Create Rookie =====
APP.post('/ffnotebook/rookies', (req, res) => {
    Rookies.create(req.body, (error, createdRookie) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Here is your added Rookie: ', createdRookie)
        }
        res.redirect('/ffnotebook/rookies')
    })
})

// ===== Show Rookie =====
APP.get('/ffnotebook/rookies/:id', (req, res) => {
    Rookies.findById(req.params.id, (err, foundRook) => {
        res.render('show_rook.ejs', {
            rookies: foundRook
        })
    })
})


// ===== Find Rookie to Edit =====
APP.get('/ffnotebook/rookies/:id/edit', (req, res) => {
    Rookies.findById(req.params.id, (err, editRook) => {
        res.render('edit_rook.ejs', {
            rookies: editRook
        })
    })
})

 // ===== Edit the Rookie =====
 APP.put('/ffnotebook/rookies/:id', (req, res) => {
    Rookies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRook) => {
        console.log(updatedRook)
        res.redirect('/ffnotebook/rookies')
    })
})


// ===== Delete Rookie =====
APP.delete('/ffnotebook/rookies/:id', (req, res) => {
    Rookies.findByIdAndRemove(req.params.id, (err, deletedRook) => {
        console.log('Deleted Player: ', deletedRook)
        res.redirect('/ffnotebook/rookies')
    })
})


// ---------------------------------

// ================================
// -------- DEVY SECTION ----------
// ================================


// ===== Devy Page =====
APP.get('/ffnotebook/devy', (req, res) => {
    Devy.find({}, (error, allDevy) => {
        res.render('devy.ejs', {
            devy: allDevy
        })
    })
})

// ===== New Devy =====
APP.get('/ffnotebook/new/devy', (req, res) => {
    res.render('new_devy.ejs')
})

// ===== Create Devy =====
APP.post('/ffnotebook/devy', (req, res) => {
    Devy.create(req.body, (error, createdDevy) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Here is your added Devy: ', createdDevy)
        }
        res.redirect('/ffnotebook/devy')
    })
})


// ===== Edit Devy =====

// ===== Delete Devy =====


// ----------------------------------


APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})