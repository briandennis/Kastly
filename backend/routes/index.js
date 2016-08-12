module.exports = (req, res, next) => {

  const user = req.session.user;
  console.log(user);

  res.render('index', { user });

};
