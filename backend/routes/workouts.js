// to get access to app we need to use express router
const express = require('express')
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
// create an instance of Router
const router = express.Router()

// attach handler to /

// GET all workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'GET single workout'})
})


// POST a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        // async call
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    } 
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a workout'})
})

// export the router with routes
module.exports = router