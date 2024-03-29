const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    chatUsers: {
        type: Array,
        required: true,
    },
    sender: {
        type: String,
        required: true
    } 
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);