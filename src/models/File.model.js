import mongoose  from "mongoose";


const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
     thumbnailurl:{
        type:String,
        require:true
     }
    ,
    fileurl:{
        type:String,
        require:true
    },
    fileType:{
        type:String,
        require:true
    }
})


const fileModel = new mongoose.model("file",fileSchema);

export default fileModel;