const path              = require('path');
const config             = require('./settings');
const TwitterStrategy   = require('passport-twitter');
const User              = require('./models/user');

module.exports = (passport, db) => {

  // configure passport
  passport.use(new TwitterStrategy({
      consumerKey: config.TWITTER_KEY,
      consumerSecret: config.TWITTER_SECRET,
      callbackURL: config.HOST +  path.join( 'auth', 'twitter', 'callback' )
    }, (token, tokenSecret, profile, cb) => {

      User.findOrCreate({ twitterId: profile.id }, ( err, user, created ) => {
        if ( !err ) {
          const profileObj = profile._json;
          console.log(created);
          if ( created ) {
            user.name = profileObj.name;
            user.image = profileObj.profile_image_url.replace('normal', 'bigger');
            user.username = profileObj.screen_name;
            user.save().then( () => {
              cb(null,user);
            });
          } else {
            cb(null, user);
          }
        } else{
          cb(err);
        }
      });
    }
  ));

  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser( (id, done) => {
    User.findOne({ id }).then( (user) => {
      done(null, user);
    }).catch( (err) => {
      done(err);
    });
  });

  return passport;
};
