module.exports = (req, res, next) => {
  res.render('index.html', {
    prod: process.env.NODE_ENV === 'production' ? true : false
  });
}
