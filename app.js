require('dotenv').config()

const express = require("express");
const app = express()
const PORT = process.env.PORT || 9000;
const mongoose = require("mongoose");

const basicAuth = require("express-basic-auth")

//routes
const gundam_routes = require("./routes/gundam_routes")

mongoose.connect(process.env.LOCAL_DATABASE)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Connection Failed", err)
    })




app.use(basicAuth({
    users: {
        [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD
    },
    challenge:true,
    unauthorizedResponse: "Authorized Access ONLY!!!"
}));


app.use(express.urlencoded({ extended: true }))

app.use("/", gundam_routes)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})