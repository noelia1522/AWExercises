
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')

const users = []    //users fake database
console.log(users);

//function initialize(passport, getUserByEmail, getUserById) {

function getUserByEmail(email) {
  return users.find((item) => item.email === email);
}
function getUserById(id) {
  return users.find((item) => item.id === id);
}

//this is only used cause we are not using a DB for now and we do the checks on the array users that is here
 initializePassport(passport, getUserByEmail, getUserById)

  router.get('/', (req, res) => {
    res.render('index.ejs', { name: req.user.name})
  })

  router.get('/login', (req, res) => {
    res.render('login.ejs')
  })

  router.post('/login', (req, res) =>{
    //authenticate and redirect to index if true
    res.redirect("/")
  }
  )

  router.get('/register', (req, res) => {
    res.render('register.ejs')
  })

  router.post('/register', async (req, res) => {
    // register and redirect to login
    res.redirect('/login')
    //TODO: check if email already exists!!


  })

  router.delete('/logout', (req, res) => { //delete the session id
    //logged out and redirect to login
    res.redirect('/login');
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
