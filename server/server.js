const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const multer = require('multer');
const express = require('express');
const StudentScheme = require('./StudentScheme');

const port = 4000;
const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    }
});

app.use(express.static(__dirname));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});

let upload = multer({storage: storageConfig}).single("avatar");

MongoClient.connect('mongodb://mongo:27017/students/mongo', (err, client) => {
    if (err) {
        console.error(err);
        return res.sendStatus(500);
    }
    const db = client.db('mongo');
    // db.collection('students').drop();
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
        upload(req, res, function(err) {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }

            const newStudent = new StudentScheme ({
                avatar: req.file.path,
                name: req.body['ФИО'],
                speciality: req.body['Специальность'],
                group: req.body['Группа'],
                rating: req.body['Рейтинг'],
                age: req.body['Возраст'],
                color: req.body['Любимый цвет'], 
            });

            collection.insertOne(newStudent, (err, res) => {
                if (err) {
                   return console.error(err);
                }
            });
            res.sendStatus(200);
        });
    });

    app.delete('/api/delete/:id', (req, res) => {
        const parameter = {_id: mongoose.Types.ObjectId(req.params.id)};
        const fs = require('fs');
        collection.findOneAndDelete(parameter, (err, result) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
                return;
            }

            fs.stat(result.value.avatar, (err, stats) => {
                if (err) {
                    return console.error(err);
                }
             
                fs.unlink(result.value.avatar, (err) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('file deleted successfully');
                });  
            });
        });
    })

    app.listen(port, () => console.log("Listening port", port));
});