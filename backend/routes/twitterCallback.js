module.exports = function (req, res, next) {

  req.session.user = req.user;
  req.session.save( ( err ) => {
    res.redirect('/');
  });

};
