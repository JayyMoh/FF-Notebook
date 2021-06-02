const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Rookies = require('../models/rookies.js')

// ================================
// -------- ROOKIE SECTION --------
// ================================

// ===== Rookie Page =====
router.get('/', (req, res) => {
    Rookies.find({}, (error, allRookies) => {
        res.render('rookies.ejs', {
            rookies: allRookies
        })
    })
})

// ===== New Rookie =====
router.get('/new', (req, res) => {
    res.render('new_rook.ejs')
})

// ===== Create Rookie =====
router.post('/', (req, res) => {
    Rookies.create(req.body, (error, createdRookie) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Here is your added Rookie: ', createdRookie)
        }
        res.redirect('/rookies')
    })
})

// ===== Show Rookie =====
router.get('/:id', (req, res) => {
    Rookies.findById(req.params.id, (err, foundRook) => {
        res.render('show_rook.ejs', {
            rookies: foundRook
        })
    })
})


// ===== Find Rookie to Edit =====
router.get('/:id/edit', (req, res) => {
    Rookies.findById(req.params.id, (err, editRook) => {
        res.render('edit_rook.ejs', {
            rookies: editRook
        })
    })
})

 // ===== Edit the Rookie =====
router.put('/:id', (req, res) => {
    Rookies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRook) => {
        console.log(updatedRook)
        res.redirect('/rookies')
    })
})


// ===== Delete Rookie =====
router.delete('/:id', (req, res) => {
    Rookies.findByIdAndRemove(req.params.id, (err, deletedRook) => {
        console.log('Deleted Player: ', deletedRook)
        res.redirect('/rookies')
    })
})


module.exports = router