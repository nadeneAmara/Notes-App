const express = require("express");
const app = express();
const mongoose = require('mongoose');
const NoteModel = require("./models/Note");

// Database Connection
mongoose.connect(
    "mongodb://localhost:27017/notes-app?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    { useNewUrlParser: true }
);

app.get("/create", async (req, res) => {
    const note = new NoteModel({title: "Hi", text: "hello there", user: "Nadene"});
    await note.save();
    res.send("inserted data");

});


app.listen(3001, ()=> {
    console.log("connected");
});