const http              = require('http');
const path              = require('path');
const express           = require('express');
const morgan            = require('morgan');
const router            = require('./backend/router');
const swig              = require('swig');
const mongoose          = require('mongoose');
const config             = require('./settings');
const bodyParser        = require('body-parser');
const passport          = require('./passportConfig')( require('passport') );

const port = process.env.PORT || 8000;
const app = express(http);

// configure db
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(`mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_LINK}/${config.DB_NAME}`);
} else {
  mongoose.connect(`mongodb://${config.DB_LINK}/${config.DB_NAME}`);
}
const db = mongoose.connection;

// configure session
app.use(require('express-session')({
  secret: 'temp-secret',
  resave: true,
  saveUninitialized: true
}));

// add passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set static directory
app.use(express.static('static'));

// Set templating engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', `${__dirname}/templates`);

// configure CORS
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// add json request body parsing
app.use(bodyParser.json());

// log requests
app.use(morgan('tiny'));

// set up routes
app.use(router(passport, db));

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  app.listen(port);
  console.log(`Ready for business on ${port}`);
});
