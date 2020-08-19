const mongoose = require("mongoose")

const userScheema = mongoose.Schema({    
    name:String,
    password:String,

})

module.exports = mongoose.model("users",userScheema)
