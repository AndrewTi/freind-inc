//load module
const express = require("express");

//own module
const parseLocalLink = require("./parse/parseLocalLink.js");

let app = express();

app.use(express.static("view"));
app.use("/api", parseLocalLink);

app.listen(3005,() => {
    console.log("listen on port: 3005");
})