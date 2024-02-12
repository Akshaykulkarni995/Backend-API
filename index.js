const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT ||  8000
const patientData = require("./patient.json")

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/service",(req,res)=>{
    res.send(
        patientData
    )
})

app.listen(port,()=>{
    console.log("I am live ");
})