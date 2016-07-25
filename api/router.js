const Express = require('express');

module.exports = (passport) => {

  return Express.Router()

  .get( '/', require('./routes/index') )

  .get( '/search/', require('./routes/search') )

  .get('/login/twitter', passport.authenticate('twitter'),
        require('./routes/loginTwitter')(passport) )
  .get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/#discover');
  });

};
