const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// Import Model
const Veterans = require('../models/veterans.js')

// ===================================
// ------- VETERAN ROUTES ------------
// ===================================

// ===== Veterans Page =====
router.get('/', (req, res) => {
    Veterans.find({}, (error, allVets) => {
        res.render('veterans.ejs', {
            veterans: allVets
        })
    })
})

// ===== New Vet =====
router.get('/new', (req, res) => {
    res.render('new_vet.ejs')
})

// ===== Create Vet =====
router.post('/', (req, res) => {
    Veterans.create(req.body, (error, createdVet) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Here is your added Vet: ', createdVet)
        }
        res.redirect('/veterans')
    })
})

// ===== Show Vet =====
router.get('/:id', (req, res) => {
    Veterans.findById(req.params.id, (err, foundVet) => {
        res.render('show_vet.ejs', {
            veterans: foundVet
        })
    })
})


// ===== Find Vet to Edit =====
router.get('/:id/edit', (req, res) => {
    Veterans.findById(req.params.id, (err, editVet) => {
        res.render('edit_vet.ejs', {
            veterans: editVet
        })
    })
})

// ===== Edit the Vet =====
router.put('/:id', (req, res) => {
    Veterans.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedVet) => {
        console.log(updatedVet)
        res.redirect('/veterans')
    })
})

// ===== Delete Vet =====
router.delete('/:id', (req, res) => {
    Veterans.findByIdAndRemove(req.params.id, (err, deletedVet) => {
        console.log('Deleted Player: ', deletedVet)
        res.redirect('/veterans')
    })
})


module.exports = router