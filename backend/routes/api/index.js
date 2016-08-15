const Express = require('express');

module.exports = (db) => {
  return Express.Router()

    .get('/', (req, res) => {
      res.send('Success');
    })
    .get('/user/:userId?', require('./user'))

    .get( '/cast/:castId?', require('./cast')(db) );
}
