// Requiring our models and passport as we've configured it
const db = require("../models");
const express = require("express");
const router = express.Router();

// Our Routes //

// Home page (Sign-up Form)
router.get("/", (req, res) => {
  res.render("index");
});

// Sign-up Route posts to database 
router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    state: req.body.state,
    age: req.body.age,
    essential_worker: req.body.essential_worker,
  })
    .then(() => {
      res.redirect(307, "/api/user");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// ROUTES - findOne by id -- one of these has got to go :) 

router.get("/api/userData/:id", (req, res) => {
  console.log("reads this route");
  const condition = `id =${req.params.id}`;
  const userData = db.findOne({
    where: { id: condition },
  });
  console.log(userData);
  res.render("index", userData);
});


router.get("/api/user/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((dbUser) => res.json(dbUser));
});

module.exports = router;
