const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var studentScheme = new Schema({
    name: String,
    speciality: String,
    group: String,
    rating: Number,
    age: Number,
    color: String, 
});
module.exports = mongoose.model("student", studentScheme);