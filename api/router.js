const Express = require('express');

module.exports = (passport) => {

  return Express.Router()

  .get( '/', require('./routes/index') )

  .get( '/search/', require('./routes/search') );

  .get('/login/twitter', require('./routes/loginTwitter')(passport) );

}
