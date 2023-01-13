
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')
//we import the config file 
const User = require("../models/user")

/*
const users = []    //users fake database
console.log(users);

//function initialize(passport, getUserByEmail, getUserById) {

function getUserByEmail(email) {
  return users.find((item) => item.email === email);
}
function getUserById(id) {
  return users.find((item) => item.id === id);
}
*/

initializePassport(passport)

router.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

router.get('/login', checkNotAuthenticated, (req, res) => { //if the user is logged in, she shouldn't be able to see the login page
  res.render('login.ejs') //this function is implemented
})


router.post('/login', checkNotAuthenticated, passport.authenticate("local", {
  successRedirect: '/',
  failureRedirect: '/login',//if email is repetitive or password wrong
  failureFlash: true
}))

router.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

router.post('/register', checkNotAuthenticated, async (req, res) => {
  //TODO: check if email already exists!!
  const hashedPassword = await bcrypt.hash(req.body.password, 10);//salt = 10 
  //it has to wait for the password bc it's interaction with a database!
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    //register and redirect to login
    res.redirect('/login')
  }
  catch (err) {
    console.log(err);
    res.redirect('/register');
  }
})

router.delete('/logout', (req, res) => { //delete the session id
  req.logOut();
  res.clearCookie("connect.sid", { path: "/" })

  //logged out and redirect to login
  res.redirect('/login');
  req.session.destroy(function(error){
    if(error){
      return (error)
    }
    res.redirect('/login');//if it doesn't have error redirect to login page
  })
})


//helper middleware
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {    //a passport function
    return next()
  }
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}


module.exports = router;
