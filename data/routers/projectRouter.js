//project Router
//adding projects.
//retrieving a list of projects.

let express = require("express");
let pRouter = express.Router();
let p = require("../models/projectModel");

pRouter.get("/projects", (req, res) => {
  p.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json({ error: err, message: err.message }));
  res.json("projects working");
});

projectRouter.post("/projects", (req, res) => {
  p.insert(req.body)
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

module.exports = rRouter;
