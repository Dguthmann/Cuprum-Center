const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars")

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

//set handlebars as default template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import Routes for controllers
// For handling db requests
const workoutController = require('./controllers/workout-controller')
app.use(workoutController)
// For handling page rendering
const htmlController = require('./controllers/html-controller')
app.use(htmlController)

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
