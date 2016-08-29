const Playlist = require('./../../../models/playlist');
const Episode = require('./../../../models/episode');

module.exports = (db) => {
  return (req, res) => {
    switch (req.method) {
      case 'POST':
        postHandler(req, res);
        break;
    }
  }
};

function postHandler (req, res) {
  if (req.params.playlistId && req.body) {
    Playlist.findOne({ _id: req.params.playlistId })
      .then( (playlist) => {
        const podcast = new Podcast({
          title: req.body.podcast.title,
          castId: req.body.podcast.castId,
          image: req.body.podcast.image,
        });
        const episode = new Episode({
          podcast,
          description: req.body.description,
          title: req.body.title,
          date: req.body.date,
          link: req.body.date
        });
        playlist.content.push(episode);
        return playlist.save()
      })
      .then( (updatedPlaylist) => {
        res.status(200).json(updatedPlaylist);
      })
      .catch( (error) => {
        res.status(500).send(error);
      });
  } else {
    badRequest();
  }
}

function badRequest () {
  res.status(400).send('Bad request.');
}
