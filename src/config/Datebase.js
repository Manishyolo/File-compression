const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();


function connectTodatbase(){
     mongoose.connect(process.env.MONGODB_URI).then(res=>{
            console.log("connected to database");
            
     }).catch((err)=>{
          console.log(err);
          
     })
}

module.exports = connectTodatbase;