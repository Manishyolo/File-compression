import { ImageEncoders,VideoEncoders } from "../services/ffmpeg/encoders"

export const encoderSelection = (format)=>{

     if(!format) throw new Error("Format not provided");
     if(!ImageEncoders.includes(format) && !VideoEncoders.includes(format)) throw new Error("File format not supported");



     
     
}