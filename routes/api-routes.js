const db = require("../models");

// Our Routes //
module.exports = (app) => {
  app.get("/api/userData/:email", (req, res) => {
    db.User.findOne({
      where: {
        email: req.params.email,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};

