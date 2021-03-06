const Playlist = require('./../../../models/playlist');
const User     = require('./../../../models/user');

module.exports = (db) => {
  return (req, res) => {
    switch (req.method) {
      case 'POST':
        postHandler(req, res);
        break;
      case 'PUT':
        putHandler(req, res);
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
      description: data.description,
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

function putHandler (req, res) {
  if (req.params.playlistId && req.body) {
    Playlist.findOne({ _id: req.params.playlistId })
      .then( (playlist) => {
        if (req.body.content) {
          if (playlist.authorId !== req.session.user._id) {
            res.status(403).send();
          } else {
            playlist.content = req.body.content;
          }
        } else if (req.body.comments) {
          if (req.body.comments.length - playlist.comments.length !== 1) {
            res.status(403).send();
          } else {
            playlist.comments = req.body.comments;
          }
        } else if (req.body.likes) {
          if (Math.abs(req.body.likes.length - playlist.likes.length) !== 1) {
            res.status(403).send();
          } else {
            playlist.likes = req.body.likes;

            // update user accordingly
            const index = playlist.likes.indexOf(req.session.user._id);
            User.findOne({ _id: req.session.user._id })
              .then( (user) => {
                if (index === -1) {
                  user.likes.push(req.params.playlistId);
                } else {
                  const indexToRemove = user.likes.indexOf(req.params.playlistId);
                  user.likes.splice(indexToRemove, 1);
                }
                user.save();
              });
          }
        }
        return playlist.save()
      })
      .then( (updatedPlaylist) => {
        res.status(200).json(updatedPlaylist);
      })
      .catch( (error) => {
        res.status(500).json(error);
      });
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
