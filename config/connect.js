const { application } = require('express')
const mongoose = require('mongoose')



const connectDb= async()=>{
    try {
        const connect = await mongoose.connect(process.env.connectString);
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}



module.exports = connectDb