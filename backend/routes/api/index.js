const Express = require('express');

module.exports = function () {

  var router = Express.Router();

  router.get('/', (req, res) => {
    res.send('omg!');
  });

  return router;

};
