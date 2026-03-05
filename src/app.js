const express = require("express");
const app = express();
const filecompression = require("./services/compression");
const FileRouter = require("./routes/File.route");
app.use(express.json());


// Routes

app.use("/file",FileRouter)


module.exports = app