import app from "./src/app.js";
import connectTodatbase from "./src/config/Datebase.js";

connectTodatbase();

app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})




