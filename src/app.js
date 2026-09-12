import express from "express";
import cors from "cors"
const app = express();

import FileRouter from "./routes/File.route.js";
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Routes
app.use(cors())
app.use("/api/file",FileRouter)


export default app;