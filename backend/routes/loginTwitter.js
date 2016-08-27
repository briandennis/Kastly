module.exports = (passport) => {

  return (req, res, next) => {
    req.session.returnPage = req.originalUrl;
    req.session.save(() => {
      console.log('Saved return page!');
    });
    console.log('Logging in');
  }
};
