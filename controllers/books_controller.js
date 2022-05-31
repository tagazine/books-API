// Required
const express = require("express");
const books = express.Router();
const Books = require("../models/book.js");

// Index
books.get("/", (req, res) => {
  Books.find()
    .then((foundBooks) => {
      return res.status(200).json(foundBooks);
    })
    .catch((err) => {
      res.status(400).json({ message: "Couldn't find books!" });
    });
});

// Show
books.get("/:id", (req, res) => {
  Books.findOne(req.params.id)
    .then((foundBook) => {
      res.status(200).json(foundBook);
    })
    .catch((err) => {
      res.status(400).json({ message: "Couldn't find specific book!" });
    });
});

// Update
books.put("/:id", (req, res) => {
  Books.findByIdAndUpdate(req.params.id, req.body)
    .then((foundBook) => {
      res.status(200).json(foundBook);
    })
    .catch((err) => {
      res.status(400).json({ message: "Couldn't edit book!" });
    });
});

// Delete
books.delete("/:id", (req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then((deletedBook) => {
      res.status(200).json({ message: "Successful Deletion!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Couldn't delete book!" });
    });
});

// Post
books.post("/", (req, res) => {
  Books.create(req.body)
    .then((createdBook) => {
      res.status(200).json(createdBook);
    })
    .catch((err) => {
      res.status(400).json({ message: "Couldn't create book!" });
    });
});

// Export
module.exports = books;
