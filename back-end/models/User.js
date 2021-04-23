const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name : {
        type : String,
        required : true,
        min : 4
    },
    last_name : {
        type : String,
        required : true,
        min : 4
    },
    email : {
        type : String,
        required : true,
        min : 6
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    role : {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);