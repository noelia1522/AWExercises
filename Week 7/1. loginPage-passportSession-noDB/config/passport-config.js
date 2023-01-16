const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {

  const customFields = {
    usernameField: "email",
    passwordField: "password",
  };

  //This is the callback function that goes inside localstrategy setup
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)  
    //const user = Users.findOne({email: email})   

    if (!user) {
      return done(null, false, { message: 'No user with that email' })
      //se pone false porque es el caso de que no hay user
    }

    //si hay user:

    try {
      //user.password the one in the array and password the one we get from the user
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        //si las contraseñas no son iguales
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy(customFields, authenticateUser))

  //save user.id in our session
  //done is a callback function, you ca ¡n use any other name
  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}
33

module.exports = initialize