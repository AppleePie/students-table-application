const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const StudentScheme = require('./StudentScheme');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});

MongoClient.connect('mongodb://mongo:27017/students/mongo', (err, client) => {
    if (err) {
        return console.error(err);
    }
    const db = client.db('mongo');
    const collection = db.collection('students');
    app.get('/api/get', (req, res) => {
        collection.find().toArray((err, docs) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.send(docs);
        });
    });
    app.post('/api/post', (req, res) => {
        console.log(req.body);
        if (!req.body)
            return;
        const newStudent = new StudentScheme ({
            name: req.body['ФИО'],
            specialization: req.body['Специальность'],
            group: req.body['Группа'],
            age: "18",
            color: "Желтый", 
        });
        collection.insertOne(newStudent, (err, res) => {
            if (err) {
                console.log(err);
            }
        });
    });
    app.listen(port, () => console.log("Listening port", port));
});