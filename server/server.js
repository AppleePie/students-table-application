const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const StudentScheme = require('./StudentScheme');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://mongo:27017/students/mongo', (err, client) => {
    if (err) {
        return console.error(err);
    }
    const newStudent = new StudentScheme ({
        name: "Дима Жвакин",
        specialization: "Математика",
        group: "МТ-101",
        age: "18",
        color: "Синий", 
    });
    const db = client.db('mongo');
    const collection = db.collection('students');
    app.get('/api', (req, res) => {
        collection.insertOne(newStudent, (err, res) => {
            if (err) {
                console.log(err);
            }
        });
        collection.find().toArray((err, docs) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.send(docs);
        });
    });
    app.listen(port, () => console.log("Listening port", port));
});