// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Eligibility = sequelize.define("Eligibility", {
    // Need states, age for vaccine, essential workers
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The password cannot be null
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    essential_worker: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  });
  return Eligibility;
};
