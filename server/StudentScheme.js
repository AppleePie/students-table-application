const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var studentScheme = new Schema({
    name: String,
    specialization: String,
    group: String,
    age: Number,
    color: String, 
});
module.exports = mongoose.model("student", studentScheme);