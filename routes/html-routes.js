const db = require("../models");

module.exports = app => {
  // Home page (Sign-up Form)
  app.get("/", (req, res) => {
    res.render("index", { title: "vaccine" });
  });

  app.post("/", (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      state: req.body.state,
      age: req.body.age,
      essential_worker: req.body.essential_worker
    })
      .then(user => {
        console.log(user.dataValues);
        res.render("userdata", {
          title: "UserData",
          person: user.dataValues,
          key: process.env.COVIDACTNOW_API
        });
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // will be deleted after app is done
  app.get("/test", (req, res) => {
    res.render("userdata", {
      person: {
        email: "jacqueline@jr.com",
        first_name: "Jacqueline",
        last_name: "Ross",
        state: "MI",
        age: "30",
        essential_worker: true
      },
      key: process.env.COVIDACTNOW_API
    });
  });

  app.get("/returning", (req, res) => {
    res.render("returninguser");
  });

  app.get("/returning/:email", (req, res) => {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(user => {
      console.log(user);
      res.render("userdata", {
        title: "UserData",
        person: user.dataValues,
        key: process.env.COVIDACTNOW_API
      });
    });
  });

  app.get("/state", (req, res) => {
    res.render("statedata");
  });

  app.get("/state/:state", (req, res) => {
    db.User.findAll({
      where: {
        state: req.params.state,
      },
    }).then((data) => {
      console.log(data);
      res.render("vaccinedata", {users: data}); 
      res.json(data); 
    });
  });
};
