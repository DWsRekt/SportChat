import {config} from 'dotenv'

config({path : '../.env'})

import express from 'express'

const app = express()
const PORT = process.env.BACKEND_PORT || 5001
// const mongoose = require('mongoose')

console.log(process.env.BACKEND_PORT)


// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

app.get("/api", (req, res) =>{
    res.json({"users": ["u1", "u2", "u2"]})
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})