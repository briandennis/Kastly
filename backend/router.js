const Express = require('express');

module.exports =

  Express.Router()

  .get( '/', require('./routes/index') )

  .get( '/search/', require('./routes/search') );
