const app = require("./src/app");
const connectTodatbase = require('./src/config/Datebase');


connectTodatbase();

app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})




