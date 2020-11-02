const { response } = require("express");
var express = require("express");

var router = express.Router();

const db = require("../models");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/allworkouts", function (req, res) {
  db.Workout.find({})
    .then(workout => {
      res.render("allWorkouts", {workout});
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
