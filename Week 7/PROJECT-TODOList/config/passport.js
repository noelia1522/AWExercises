const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/userModel')

passport.use(new LocalStrategy(
    {
       usernameField: "username",
       passwordField: "password"
    },
    function(username, password, done) {
      
      User.findOne({ username: username })
      .then(theUser => {
         if (!theUser) {
            return done(null, false, { message: "User does not exist" });
         }
         if (!theUser.validPass(password)) {
            return done(null, false, { message: "Password is not valid." });
         }
         return done(null, true);
      });
    }
  ));

 passport.serializeUser((user, done) => {
    done(null, user.id);
 });
 passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
       done(err, user);
    });
 });
 
