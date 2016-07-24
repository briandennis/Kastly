module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    twitterId: DataTypes.STRING,
  })

  return User;
}
