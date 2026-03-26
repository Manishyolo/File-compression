import express from "express";
const app = express();

import FileRouter from "./routes/File.route.js";
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Routes

app.use("/api/file",FileRouter)


export default app;