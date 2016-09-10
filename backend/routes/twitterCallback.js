module.exports = function (req, res, next) {

  req.session.user = req.user;
  console.log('Added user to session');
  req.session.save( ( err ) => {
    res.redirect(req.session.returnTo || '/');
  });

};
