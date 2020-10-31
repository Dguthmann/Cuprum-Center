const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Set up basic Schema for a new exercise
const ExerciseSchema = new Schema({
  exerciseName: {
    // resistance or cardio
    type: String,
    required: "Exercise Name is Required"
  },
  typeOf: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
  distance: Number,
  isCardio: Boolean
});
// 

// Have dropdown set the boolean flag isCardio and number distance
ExerciseSchema.methods.setCardio = function(distance) {
  if (this.typeOf === "cardio") {
    this.isCardio = true;
  } else {
    this.isCardio = false;
  }
  return this.isCardio;
}

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
