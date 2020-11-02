const express = require("express");
const router = express.Router();

const db = require("../models");


router.get("/api/all", (req, res) => {
  db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});



router.post("/api/workout/create", function ({ body }, res) {
  //make a query create a new workout
  console.log(body);
  // db.Workout.create(body)
  //   .then(dbUser => {
  //     res.json(dbUser);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
});


router.post("/api/exercise/create", function (req, res) {
  //make a query create a new workout
  // db.Exercise.create(body)
  //   .then(dbUser => {
  //     res.json(dbUser);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
});

router.delete("/api/workout/delete/:id", (req, res) => {
  console.log(req.params.id);
  // db.Workout.remove(
  //   {
  //     _id: mongojs.ObjectID(req.params.id)
  //   },
  //   (error, data) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.send(data);
  //     }
  //   }
  // );
});


router.delete("/api/exercise/delete/:id", (req, res) => {
  console.log(req.params.id);
  // db.Exercise.remove(
  //   {
  //     _id: mongojs.ObjectID(req.params.id)
  //   },
  //   (error, data) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.send(data);
  //     }
  //   }
  // );
});




module.exports = router;
