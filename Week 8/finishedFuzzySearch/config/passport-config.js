const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const nodeHttpProxy = require('node-http-proxy');
const User = require('../models/Users')


function initialize(passport) {//what credentials we're gonna used
  const customFields = {//if you want to change the default one
    usernameField: "email",
    passwordField: "password",
  };

  //This is the callback function that goes inside localstrategy setup
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({email: email});
    // console.log("in config: ",user);
    if (user === null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) { //change password to []

        return done(null, user) //when we do some comparison, we return the done method of password
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      console.log("in the catch block");
      return done(e) // = next(e) //https://stackoverflow.com/questions/26164837/difference-between-done-and-next-in-node-js-callbacks
    }
  }

  passport.use(new LocalStrategy(customFields, authenticateUser))// passport strategy will use these custom fields and this authenticateUser function

  //save user.id in our session
  passport.serializeUser((user, done) => {

    return done(null, user.id) //connects the user with a session
  })
  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({_id: id});
    return done(null, user)

  })

}

module.exports = initialize;
