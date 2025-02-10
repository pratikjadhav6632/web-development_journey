const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});

app.get("/ig/:username", (req,res) => {
    let { username } = req.params;
    res.render("insta.ejs", { username });
});