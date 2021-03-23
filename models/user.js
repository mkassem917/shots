// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    // first name - last name - age - essential worker (boolean) - location - email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    essential_worker: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return User;
};
