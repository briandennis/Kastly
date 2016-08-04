module.exports = (req, res, next) => {

  const user = req.session.user;
  console.log('got here!' + user);
  console.log(req.session);
  console.log(req.session.id);

  res.render('index', { user });

};
