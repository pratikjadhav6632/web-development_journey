// Import the express module
const express = require("express");
// Create an instance of express
const app = express();
// Define the port number
const port = 8080;
// Import the path module
const path = require("path");
//import uuid module
const { v4: uuidv4 } = require('uuid');


// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set the views directory
app.set("views", path.join(__dirname, "/views"));
// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

//adding demo data 
let posts = [
    {
        id: "1a",
        username: "ajay",
        content: "I am Ajay i Got new Opportunity at MNC"
    },
    {
        id: "2a",
        username: "keshav",
        content: "Hard work pay off.."
    },
    {
        id: "3a",
        username: "Riya",
        content: "Finally i got an internship.."
    }
];
// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Listening port ${port}`);
});

// Define a route for the root URL
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
     res.render("show.ejs", { post });
})
