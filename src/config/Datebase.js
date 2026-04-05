import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


function connectTodatbase(){
     mongoose.connect(process.env.MONGO_URI).then(res=>{
            console.log("connected to database");
            
     }).catch((err)=>{
          console.log(err);
          
     })
}

export default connectTodatbase;