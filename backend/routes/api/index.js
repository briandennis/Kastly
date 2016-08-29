const Express = require('express');

module.exports = (db) => {
  return Express.Router()

    .get('/', (req, res) => {
      res.send('Success');
    })

    .get('/user/:userId/playlist', require('./userPlaylists'))
    .get('/user/:userId?', require('./user'))

    .get('/cast/:castId?', require('./cast') )

    .all('/playlist/:playlistid/episode', require('./episode')(db))
    .all('/playlist/:playlistId?', require('./playlist')(db));
}
