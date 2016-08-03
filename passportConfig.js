const path              = require( 'path' );
const models            = require('./models');
const config             = require( './settings' );
const TwitterStrategy   = require( 'passport-twitter' );

module.exports = (passport) => {

  // configure passport
  passport.use(new TwitterStrategy({
      consumerKey: config.TWITTER_KEY,
      consumerSecret: config.TWITTER_SECRET,
      callbackURL: config.HOST +  path.join( 'auth', 'twitter', 'callback' )
    }, (token, tokenSecret, profile, cb) => {
      models.User.findOrCreate({
        where: { twitterId: profile.id },
        default: { name: profile.name }
      }).spread( (user, created) => {
        console.log(user);
        console.log('Success!');
        cb(null, user);
      });
    }
  ));

  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser( (id, done) => {
    models.User.findById(id).then( (user) => {
      done(null, user);
    })
  });

  return passport;
};
