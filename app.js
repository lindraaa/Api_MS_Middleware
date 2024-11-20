require('dotenv').config()

const express = require("express");
const app = express()
const PORT = process.env.PORT || 9000;
const mongoose = require("mongoose");


//routes
const gundam_routes = require("./routes/gundam_routes");
const { createBasicAuth } = require('./middlewares/middleware');

mongoose.connect(process.env.LOCAL_DATABASE)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Connection Failed", err)
    })




app.use(createBasicAuth(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD))

//for postman testing
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", gundam_routes)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})