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
app.use(methodOverride('_method'));
app.use(flash());

app.use(session({
  //use connect-mongo to save session id to database
}))
 app.use(passport.initialize());
 app.use(passport.session());

 app.use(passport.initialize())
 app.use(passport.session())

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
.then(() => {
  console.log("Connected to the DB...");
  app.listen(process.env.PORT, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err.message);
    else console.log(`Server listening on port ${process.env.PORT}...`);
  })})


app.use('/', authRoutes)


app.listen(3000)
