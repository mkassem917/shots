// Requiring our models and passport as we've configured it
const db = require("../models");
//const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  // ROUTES - findOne by id 

  app.get('/api/user/:id', (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      // include: [db.Author],
    }).then((dbUser) => res.json(dbUser));
  });



  //Sign up to be added for vaccine list
  // User will need to fill out info to sign up for vaccine
  // Needs email, age, if they are an essential worker (Boolean like in the burgers homework), and state of residence. Possibly add password too
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      state: req.body.state,
      age: req.body.age,
      essential_worker: req.body.essential_worker
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for user
  // Once they have signed up, where do we go after that
  // Page for the closest clinic if available
  // If not, add to waiting list
  // will be an app.get()

  // Route for logging user out
  // This can most likely be cut out !!!!!!!!!!!!!!!!!!!!!
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  // Most likely this will not be needed, but keeping just in case

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
