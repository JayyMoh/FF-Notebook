const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Devy = require('../models/devy.js')


// ================================
// -------- DEVY SECTION ----------
// ================================

// ===== Devy Page =====
router.get('/', (req, res) => {
    Devy.find({}, (error, allDevy) => {
        res.render('devy.ejs', {
            devy: allDevy
        })
    })
})

// ===== New Devy =====
router.get('/new', (req, res) => {
    res.render('new_devy.ejs')
})

// ===== Create Devy =====
router.post('/', (req, res) => {
    Devy.create(req.body, (error, createdDevy) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Here is your added Devy: ', createdDevy)
        }
        res.redirect('/devy')
    })
})

// ===== Show Devy =====
router.get('/:id', (req, res) => {
    Devy.findById(req.params.id, (err, foundDevy) => {
        res.render('show_devy.ejs', {
            devy: foundDevy
        })
    })
})


// ===== Find Devy to Edit =====
router.get('/:id/edit', (req, res) => {
    Devy.findById(req.params.id, (err, editDevy) => {
        res.render('edit_devy.ejs', {
            devy: editDevy
        })
    })
})

// ===== Edit Devy =====
router.put('/:id', (req, res) => {
    Devy.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedDevy) => {
        console.log(updatedDevy)
        res.redirect('/devy')
    })
})

// ===== Delete Devy =====
router.delete('/:id', (req, res) => {
    Devy.findByIdAndRemove(req.params.id, (err, deletedDevy) => {
        console.log('Deleted Player: ', deletedDevy)
        res.redirect('/devy')
    })
})


module.exports = router