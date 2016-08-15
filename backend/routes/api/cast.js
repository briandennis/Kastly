const fetch = require('node-fetch');

module.exports = (req, res, next) => {

  const fail = () => res.status(404).send('Bad Request');
  const toJson = (res) => res.json();

  if (!req.params.castId) fail();

  const baseUrl = 'https://itunes.apple.com/lookup?id=';
  const query = req.params.castId;

  const url = baseUrl + query;

  fetch(url)
    .then(toJson)
    .then( (data) => {
      res.send({ error: false, data });
    })
    .catch( (message) => {
      res.send({ error: true, message });
    });
};
