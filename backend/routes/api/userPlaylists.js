const Playlist = require('./../../../models/playlist');

module.exports = (req, res) => {
  if (req.params.userId) {
    Playlist.find({ authorId: req.params.userId })
      .then( (playlists) => {
        res.status(200).json(playlists);
      })
      .catch( (error) => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).send('Bad request.');
  }
}
