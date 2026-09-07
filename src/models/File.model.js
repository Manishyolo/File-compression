import mongoose  from "mongoose";


const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
     thumbnailurl:{
        type:String,
        required:false
     }
    ,
    fileurl:{
        type:String,
        require:true
    },
    fileType:{
        type:String,
        enum:["image","non-image"],
        default:"image",
        require:true
    }
})


const fileModel = new mongoose.model("file",fileSchema);

export default fileModel;