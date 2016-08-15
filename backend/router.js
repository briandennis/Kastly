const Express = require('express');

module.exports = (passport, db) => {

  const secure = passport.authenticate('twitter', {
    failureRedirect: '/'
  });

  return Express.Router()

  .use('/api', require('./routes/api')(db))

  .get( '/', require('./routes/home') )

  .get( '/search/', require('./routes/search') )

  .get('/login/twitter', secure, require('./routes/loginTwitter')(passport))
  .get('/auth/twitter/callback', secure, require('./routes/twitterCallback'))

  .get('/logout', require('./routes/logout'));
};
