const mongoose = require('mongoose');
const {options}=require('../routes/blog.route');
const User=require('./user.model');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Provide Title"]
    },
    description: {
        type: String,
        required: [true, "Provide Description"]
    },
    status: {
        type: String,
        required: [true, "Provide Status"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: [true, "Provide user id"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);