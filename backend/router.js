const Express = require('express');

module.exports = (passport, db) => {

  const redirectMiddleWare = function (req, res, next) {
    if (req.query.redirect) {
      req.session.returnTo = decodeURIComponent(req.query.redirect);
    }
    next();
  };

  const secure = passport.authenticate('twitter', {
    failureRedirect: '/'
  });

  return Express.Router()

  .use('/api', require('./routes/api')(db))

  .get( '/', require('./routes/home') )

  .get( '/search/', require('./routes/search') )

  .get('/login/twitter', redirectMiddleWare, secure)
  .get('/auth/twitter/callback', secure, require('./routes/twitterCallback'))

  .get('/logout', redirectMiddleWare, require('./routes/logout'))

  .get('*', require('./routes/home'));
};
