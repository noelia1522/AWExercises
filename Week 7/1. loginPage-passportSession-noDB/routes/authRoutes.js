
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')

const users = [{email: "nl@gmail.com", password: 1522}]    //users fake database
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

  router.get('/login', (req, res) => { //if the user is logged in, she shouldn't be able to see the login page
    res.render('login.ejs') //this function is implemented
  })


  router.post('/login',passport.authenticate("local",{
    successRedirect: '/',
    failureRedirect: '/login',//if email is repetitive or password wrong
    failureFlash: true
  }))
  /*router.post('/login', async(req, res) =>{ // 
    //authenticate and redirect to index if true


   const user = users.find((item)=> item.email === req.body.email);

    if(!user){
      console.log("No user found with this email address!")
    } else{
      const found = await bcrypt.compare(req.body.password, user.passport)
    }

    if(!found){
      console.log("Password is incorrect!")
    } else{res.redirect("/")}
    
  }
  )*/

  router.get('/register', (req, res) => {
    res.render('register.ejs')
  })

  router.post('/register', async (req, res) => {
    // register and redirect to login
    //TODO: check if email already exists!!
    const hashedPassword = bcrypt.hash(req.body.password, 10);//salt = 10
    const user = {
      id: Date.now().toString(),
      name: req.body.body.name,
      email: req.body.email,
      password: hashedPassword
    }
    users.push(user)//Users.create({}) if u¡you use 
    
    //register and redirect to login
    res.redirect('/login')
    


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
