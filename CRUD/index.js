const express = require('express')
const mongoose = require('mongoose')
const productRoute = require ('./routes/product.route.js')
const app = express()
require('dotenv').config();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send("Hello to my world bitch")
})

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to the database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        })
    })
    .catch(() => {
        console.log("Connection Failed!");

    })