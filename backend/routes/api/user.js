module.exports = function (req, res, next) {
  if ( !req.params.userId ) {
    if (req.session.user) {
      console.log('Sending user: ' + req.session.user._id);
      res.json(req.session.user);
    } else {
      res.status(200).json(null);
    }
  }
};
