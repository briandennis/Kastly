module.exports = (db) => {

  const handler = (req, res, next) => {
    if( !req.castId ) res.status(404).send();

    res.send('It worked!');
  };

  return handler;
}
