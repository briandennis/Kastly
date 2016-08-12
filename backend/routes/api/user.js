module.exports = function (req, res, next) {
  if ( !req.userId ) {
    res.json(req.session.user);
  }
};
