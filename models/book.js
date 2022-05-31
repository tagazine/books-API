// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema
const bookSchema = new Schema ({
    "title": { type: String, required: true },
    "description": String,
    "year": Number,
    "quantity": Number,
    "imageURL": String
});

// Model and Export
const Books = mongoose.model('Books', bookSchema);
module.exports = Books;