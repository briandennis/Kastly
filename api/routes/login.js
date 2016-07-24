module.exports = (passport) => {

  return (req, res, next) => {
    passport.authenticate('twitter');
  }
};
