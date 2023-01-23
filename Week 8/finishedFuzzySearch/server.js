const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require("cors");
const searchRoutes = require('./routes/searchRouter');
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })) //to handle post requests
//The application/x-www-form-urlencoded content type describes form data that is sent in a single block in the HTTP message body.
//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')//to set the view engine/ mechanism to show html pages

app.use(session({
  secret: "hey! this is your secret line!",
  resave: false,
  saveUninitialized: false,
  coockie: {maxAge: 24* 60 * 60 * 1000}, //in milliseconds
  store: MongoStore.create({
    mongoUrl: process.env.DB_SERVER,
    collection: "sessions"
  })
}))

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', searchRoutes);

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
.then(() => {
  console.log("Connected to the DB...");
  app.listen(process.env.PORT, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err.message);
    else console.log(`Server listening on port ${process.env.PORT}...`);
  })

})
.catch(err => {
  console.log(err.message);
})
