module.exports = (passport) => {

  return (req, res, next) => {
    req.session.returnPage = req.originalUrl;
    console.log('Logging in');
  }
};
