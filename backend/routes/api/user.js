module.exports = function (req, res, next) {
  if ( !req.params.userId ) {
    res.json(req.session.user);
  }
};
