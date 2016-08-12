module.exports = function (req, res, next) {
  if ( !req.userId ) {
    res.send(req.session.user);
  }
};
