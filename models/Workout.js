const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  workoutName: {
    type: String,
    trim: true,
    required: "Workout Name is Required"
  },
  Exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ],
  lastUpdated: Date
});

WorkoutSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
