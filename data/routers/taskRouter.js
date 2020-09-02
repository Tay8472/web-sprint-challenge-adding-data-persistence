//adding tasks.
//retrieving a list of tasks.
let express = require("express");
let tRouter = express.Router();
let t = require("../models/taskModel");

tRouter.get("/tasks", (req, res) => {
  grunt
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json({ error: err, message: err.message }));
  res.json("projects working");
});

tRouter.post("/tasks", (req, res) => {
  grunt
    .insert(req.body)
    .then((gruntPost) => {
      res.status(201).json(gruntPost);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Cannot add grunt",
      });
    });
});

module.exports = tRouter;
