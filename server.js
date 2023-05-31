const express = require('express')
const contact = require("./routes/contactRoutes.js")
const connectDb = require('./config/connect.js')
const dotenv = require('dotenv').config()

connectDb();



app = express()
const port = 3000

app.listen(port,()=>{
    console.log(` server is running on  port ${port}  `)
})


app.use(express.json())


app.use("/api/contacts", contact);