const mongoose = require("mongoose");

const userMentorRequestSchema = mongoose.Schema({
    userName:String,
    userPhone:String,
    userMessage:String,
    userEmail:String
});

const userMentorModel = mongoose.model("userMentorRequestModel",userMentorRequestSchema);
module.exports = userMentorModel;