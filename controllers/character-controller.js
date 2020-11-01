const express = require("express");

const router = express.Router();

const db = require("../models");


router.get("/api/all", (req, res) => {
  
});



router.post("/api/makeworkout", function (req, res) {
  //make a query create a new workout
  
});


router.post("/api/makeexercise", function (req, res) {
  //make a query create a new workout
  
});


router.delete("/api/delete/:id", (req, res) => {
  console.log(req.params.id);
  
});




module.exports = router;
