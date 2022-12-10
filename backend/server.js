require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// express app
const app = express()

// middleware required to access req object
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// grabs all routes attached
// to workouts router and uses them on the app
app.use('/api/workouts/', workoutRoutes)

// connect to DB, async in nature, takes a little time to do
// returns a promise
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to DB & listening on port,', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })

