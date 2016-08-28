module.exports = (db) => {
  return (req, res) => {
    switch (req.method) {
      case 'POST':
        postHandler();
    }
  }
}

postHandler() {

}

badRequest () {
  res.setStatus(400).send('Bad request.');
}
