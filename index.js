const express = require("express"); 
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express(); 

require("dotenv").config();

const port = process.env.PORT || 5000; 

mongoose.connect("mongodb://localhost:27017/signup",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const user = new User({
    name: "Becca",
    email: "becca1234@mail.com",
    password: "potatoes"
});

user.save();

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

