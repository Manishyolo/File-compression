
export const parseResolution = (resolution)=>{
             
     const [width, height] = resolution.split(" x ");

     return {
        width,
        height
     }

}