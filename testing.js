const express = require("express")
const app = express();
const PORT = 2000;

app.get("/greet",(req,res)=>{
    res.send("HEY THERE")
})
app.get("/setName",(req,res)=>{
    res.cookie('Name','lindra Ash')
    res.cookie('cadsd','sdsdvvh')
    res.send("Sent Cookie")
})
app.listen(PORT,()=>{
    console.log(`Server Starting at PORT ${PORT}`)
})