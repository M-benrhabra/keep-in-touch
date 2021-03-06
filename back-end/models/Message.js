const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    username : {
        type : String,
        required : true,
        min : 6
    },
    email : {
        type : String,
        required : true,
        min : 6
    },
    phone : {
        type : String,
        required : true,
        min : 10
    },
    message : {
        type : String,
        required : true
    },
    date: { type : Date, default: new Date().toLocaleDateString() }
});

module.exports = mongoose.model('Message', messageSchema);