module.exports = (req, res, next) => {

  const redirectUrl = req.session.returnTo || '/';

  // logout passport
  req.logout();

  // destroy session
  req.session.destroy( () => {
    res.redirect(redirectUrl)
  });
}
