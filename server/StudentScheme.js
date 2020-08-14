const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var studentScheme = new Schema({
    avatar: String,
    name: String,
    speciality: String,
    group: String,
    rating: Number,
    age: Number,
    gender: String,
    color: String, 
});
module.exports = mongoose.model("student", studentScheme);