module.exports = function (req, res, next) {
  if ( !req.params.userId ) {
    console.log('Sending user: ' + req.session.user._id);
    res.json(req.session.user);
  }
};
