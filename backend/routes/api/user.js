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

/*const User = require('./../../../models/user');

module.exports = function (req, res, next) {
  if ( !req.params.userId ) {
    if (req.session.user && req.session.user._id === req.params.userId) {
      res.json(req.session.user);
    } else {
      User.findOne({ _id: req.params.userId })
        .then( (user) => {
          res.status(200).json(user);
        })
        .catch( (error) => {
          res.status(500).send();
        });
    }
  }
};
*/
