const Playlist = require('./../../../models/playlist');

module.exports = (db) => {
  return (req, res) => {
    switch (req.method) {
      case 'POST':
        postHandler(req, res);
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
      authorId: req.session.user.id
    });
    playlist.save()
      .then(res.json)
      .catch( (error) => {
        res.status(500).send('Database error.');
      })
  } else {
    badRequest();
  }
}

function badRequest () {
  res.status(400).send('Bad request.');
}
