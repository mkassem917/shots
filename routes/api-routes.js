// Requiring our models and passport as we've configured it
const db = require("../models/user.js");
const express = require("express");
const router = express.Router();

// ROUTES - findOne by id
// router.get("/api/user/:id", (req, res) => {
//   db.User.findOne({
//     where: {
//       id: req.params.id,
//     },
//   }).then((dbUser) => res.json(dbUser));
// });

// //Sign up to be added for vaccine list
// // User will need to fill out info to sign up for vaccine
// // Needs email, age, if they are an essential worker (Boolean like in the burgers homework), and state of residence. Possibly add password too
// router.post("/api/signup", (req, res) => {
//   db.User.create({
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     state: req.body.state,
//     age: req.body.age,
//     essential_worker: req.body.essential_worker,
//   })
//     .then(() => {
//       res.redirect(307, "/api/login");
//     })
//     .catch((err) => {
//       res.status(401).json(err);
//     });
// });

// router.get("/api/userData/:id", (req, res) => {
//   console.log("reads this route");
//   const condition = `id =${req.params.id}`;
//   const userData = db.findOne({
//     where: { id: condition },
//   });
//   console.log(userData);
//   res.render("index", userData);
// });

router.get("/", (req, res) => {
  res.render("userdata");
});
module.exports = router;
