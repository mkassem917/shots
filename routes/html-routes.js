const db = require("../models");

module.exports = (app) => {
  // Home page (Sign-up Form)
  app.get("/", (req, res) => {
    res.render("index", { title: "vaccine" });
  });

  //renders a customized page based on the users data
  app.post("/", (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      state: req.body.state,
      age: req.body.age,
      essential_worker: req.body.essential_worker,
    })
      .then((user) => {
        console.log(user.dataValues);
        res.render("userdata", {
          title: "UserData",
          person: user.dataValues,
          key: process.env.COVIDACTNOW_API,
        });
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  //testing this 
  // Model.findAll({
  //   attributes: [[models.sequelize.literal('CASE WHEN "field1" = true THEN 55 ELSE 23 END'), 'field3']]
  // }
  app.get("/look", (req, res) => {
    db.User.findAll({
      attributes: [
        [
          db.User.sequelize.literal('CASE WHEN "age" = true', 'elligible')
          // db.User.sequelize.literal('CASE WHEN "essential_worker" = true'),
        ],
      ],
    }).then((user) => res.render(user));
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
        essential_worker: false,
      },
      key: process.env.COVIDACTNOW_API,
    });
  });

  //returning user
  app.get("/returning", (req, res) => {
    res.render("returninguser");
  });

  // returning user enters email and brings to user data
  app.get("/returning/:email", (req, res) => {
    db.User.findOne({
      where: {
        email: req.params.email,
      },
    }).then((user) => {
      console.log(user);
      res.render("userdata", {
        title: "UserData",
        person: user.dataValues,
        key: process.env.COVIDACTNOW_API,
      });
    });
  });

  //renders statedata handlebars - not sure were usign now
  app.get("/state", (req, res) => {
    res.render("statedata");
  });

  //renders all people in one state
  app.get("/state/:state", (req, res) => {
    db.User.findAll({
      where: {
        state: req.params.state,
      },
    }).then((user) => {
      console.log(user);
      res.render("vaccinedata", { person: user });
    });
  });
};
