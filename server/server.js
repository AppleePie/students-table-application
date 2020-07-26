const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const StudentScheme = require('./StudentScheme');

const port = 4000;
const app = express();

let newStudent = new StudentScheme ({
    name: "Дима Жвакин",
    specialization: "Математика",
    group: "МТ-101",
    age: "18",
    color: "Синий", 
});

mongoose.connect('mongodb://mongo:27017/students')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send(newStudent);
});

let db;

MongoClient.connect('mongodb://mongo:27017/students', (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    
    app.listen(port, () => console.log("Listening port", port));
});