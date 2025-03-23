/*Let's create a middleware for an api that check if the access token was passes in query string or not*/
const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "Accesstoken") {
        return next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/api", (req, res) => {
    res.send("Data..");
});
