const fileTypes = {
    image:[".jpg", ".jpeg", ".png", ".webp",".avif"],
    video:[".mp4", ".mov", ".mkv", ".avi", ".webm"]
}

export const getFileType = (extension)=>{
      
    if(fileTypes.image.includes(extension)){
        console.log(extension)
        return "image"
    }
    if(fileTypes.video.includes(extension)){
        return "video"
    }
    return "unknown"
}