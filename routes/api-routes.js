const db = require("../models");

module.exports = function(app) {

  // Returns all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Pushes a new exercise object to the most recent (by ID) exercise array
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne({
      _id: req.params.id
    },{ 
      $push: { exercises: [req.body] }
    },)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  // Returns a new workout
  app.post("/api/workouts/", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  // Returns all range workouts 
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
};