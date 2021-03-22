// // Requiring our models and passport as we've configured it
// const db = require("../models/user");
// const express = require("express");
// const router = express.Router();

// // Our Routes //

// router.get("/api/userData/:id", (req, res) => {
//   db.User.findOne({ where: { id: req.params.id },} ).then((dbUser) => res.json(dbUser));
// });

// module.exports = router;

const db = require("../models");

module.exports = (app) => {
  app.get("/api/userData/:email", (req, res) => {
    db.User.findOne({
      where: {
        email: req.params.email,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};

