const Playlist = require('./../../../models/playlist');
const User     = require('./../../../models/user');

module.exports = (db) => {
  return (req, res) => {
    switch (req.method) {
      case 'POST':
        postHandler(req, res);
        break;
      case 'GET':
        getHandler(req, res);
        break;
    }
  }
}

function postHandler (req, res) {
  if (!req.params.playlistId && req.session.user) {
    const data = req.body;
    const playlist = new Playlist({
      title: data.title,
      description: data.title,
      date: new Date(),
      authorId: req.session.user._id
    });
    playlist.save()
      .then( (createdPlaylist) => {
        res.status(200).json(createdPlaylist);
      })
      .catch( (error) => {
        res.status(500).send('Database error.');
      })
  } else {
    badRequest(res);
  }
}

function getHandler (req, res) {
  let playlist = null;
  if (req.params.playlistId) {
    Playlist.findOne({ _id: req.params.playlistId })
      .then( (result) => {
        playlist = result;
        return User.findOne({ _id: playlist.authorId });
      })
      .then( (result) => {
        res.status(200).json({
          playlist,
          author: result
       });
      })
      .catch( (error) => {
        res.status(400).json(error);
      });
  } else {
    Playlist.find()
      .then( (playlists) => {
        res.status(200).json(playlists);
      })
  }
}

function badRequest (res) {
  res.status(400).send('Bad request.');
}
