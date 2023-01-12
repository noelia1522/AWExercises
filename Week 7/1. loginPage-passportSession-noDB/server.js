require('dotenv').config()
const express = require('express')
const app = express()
const passport = require('passport')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')
const authRoutes = require('./routes/authRoutes')


app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false })) //to handle post requests
app.use(express.static("public"));
app.use(methodOverride('_method'))

app.use(flash())
app.use(session({
  secret:"Hello! we are happy today!",
  resave: false,
  saveUnitialized: false // makes a saved up session even if it's not initialized
  //use connect-mongo to save session to database
}))

 app.use(passport.initialize())
 app.use(passport.session())



app.use('/', authRoutes)


app.listen(3000)
