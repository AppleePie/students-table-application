const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send({'method': 'get'})
});

let db;

MongoClient.connect('mongodb://mongo:27017/mydb', (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    
    app.listen(port, () => console.log("Listening port", port));
});