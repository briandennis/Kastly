const express = require('express');
const http = require('http');
const router = require('./backend/router');
const swig = require('swig');

const port = process.env.PORT || 8000;
const app = express(http);

app.use(express.static('static'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', `${__dirname}/templates`);

// configure CORS
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('static'));

// set up routes
app.use(router);

app.listen(8000);
console.log(`Ready for business on port ${port}`);
