//resource Router
//adding resources.
//retrieving a list of resources.

let express = require("express");
let rRouter = express.Router();
let r = require("../models/resourceModel");

rRouter.get("/resources", (req, res) => {
  r.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json({ error: err, message: err.message }));
  res.json("projects working");
});

rRouter.post("/resources", (req, res) => {
  r.insert(req.body)
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
