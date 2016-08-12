const Express = require('express');

module.exports = (passport) => {

  const secure = passport.authenticate('twitter', {
    failureRedirect: '/'
  });

  return Express.Router()

  .use('/api', require('./routes/api'))

  .get( '/', require('./routes/home') )

  .get( '/search/', require('./routes/search') )

  .get('/login/twitter', secure, require('./routes/loginTwitter')(passport))
  .get('/auth/twitter/callback', secure, require('./routes/twitterCallback'))

  .get('/logout', require('./routes/logout'));
};
