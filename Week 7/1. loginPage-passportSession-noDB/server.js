require('dotenv').config()
const express = require('express')
const app = express()
const passport = require('passport')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')
const authRoutes = require('./routes/authRoutes')
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");


app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false })) //to handle post requests
app.use(express.static("public"));
app.use(methodOverride('_method'))

app.use(flash())
app.use(session({
  secret: "Hello! we are happy today!",
  resave: false,
  saveUninitialized: false, // makes a saved up session even if it's not initialized
  //use connect-mongo to save session to database
  store: MongoStore.create({//create a collection with this session in our db. adding info about database we use to store the sessions
    mongoUrl: process.env.DB_SERVER,
    collection: "sessions"
  })
}))

app.use(passport.initialize())
app.use(passport.session())



app.use('/', authRoutes)
mongoose.connect(process.env.DB_SERVER, { userNewUrlParser: true })
  .then(() => {
    console.log("connected to the DB...")
    app.listen(process.env.PORT, "localhost", (err) => {
      if (err) console.log("Server could not be started " + err.message)
      else console.log(`Server listening on PORT ${process.env.PORT}...`)
    })
    .catch(err =>
      console.error(err.message))
  })

