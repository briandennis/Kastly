module.exports = (db) => {
  return (req, res) => {
    switch (req.method) {
      case 'POST':
        postHandler(req, res);
    }
  }
}

function postHandler (req, res) {
  if (!req.params.playlistId) {
    console.log(req.body);
  } else {
    badRequest();
  }
}

function badRequest () {
  res.setStatus(400).send('Bad request.');
}
