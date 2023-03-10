const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: Date,
    updatedAt: Date,
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);