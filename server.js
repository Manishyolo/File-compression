import app from "./src/app.js";
import connectTodatbase from "./src/config/Datebase.js";

connectTodatbase();

const server = app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})



server.timeout = 0;
server.requestTimeout = 0;
