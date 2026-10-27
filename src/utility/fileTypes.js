const fileTypes = {
    image:[".jpg", ".jpeg", ".png", ".webp",".avif",".jfif",".gif"],
    video:[".mp4", ".mov", ".mkv", ".avi", ".webm"]
}

export const getFileType = (extension)=>{
      
    if(fileTypes.image.includes(extension)){
        console.log(extension)
        return {
            type:"image",
            format:extension
        }
    }
    if(fileTypes.video.includes(extension)){
        return {
            type:"video",
            format:extension
        }
    }
    return "unknown"
}