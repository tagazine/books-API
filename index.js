// Modules and Globules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Configuration
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// Controllers
const booksController = require("./controllers/books_controller.js");
app.use("/books", booksController);

// Routes
app.get("/", (req, res) => {
  res.send("Working!");
});
app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});

// Listen for Connections
app.listen(PORT, function() {
    console.log("CORS-enabled web server listening at port 3000");
});
