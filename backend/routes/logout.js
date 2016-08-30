module.exports = (req, res, next) => {

  // logout passport
  req.logout();

  // destroy session
  req.session.destroy( () => {
    res.redirect('/');
  });
}
