const Express = require('express');

module.exports = Express.Router()

  .get('/', (req, res) => {
    res.send('omg!');
  })

  .get('/user/:userId?', require('./user'));
