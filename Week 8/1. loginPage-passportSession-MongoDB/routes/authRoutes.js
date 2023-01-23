const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')
const User = require("../models/users");
const { BadRequest } = require('../utils/errors');



//this is only used cause we are not using a DB for now and we do the checks on the array users that is here
 initializePassport(passport);


  router.get('/', checkAuthenticated, (req, res) => { //  /test/

    res.render('index.ejs', { name: req.user.name})
  })


  router.get('/login', checkNotAuthenticated, (req, res) => {//if the user is logged in, she shouldn't see the login page
    console.log("get/login");
    res.render('login.ejs')//this function is implimented )
  })

  router.post('/login', checkNotAuthenticated,  passport.authenticate("local", {
      successRedirect: '/',
      failureRedirect: '/login', //if email is repetetive or passwordi s wrong
      failureFlash: true

  })
  )

  router.get('/register', checkNotAuthenticated,(req, res) => {
    res.render('register.ejs')
  })

  router.post('/register',checkNotAuthenticated, async (req, res, next) => {
    console.log("register: ", req.body);
    const {name, email, password} = req.body;
    try{
      if(!name || !password || !email){
        throw new BadRequest("Missing required field: name, password, or email")
      }
      else{
        console.log("post/register/else");
      const hashedPassword = await bcrypt.hash(req.body.password, 10); //salt = 10
     await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    // register and redirect to login
    res.redirect('/login');
    }}
  catch(err){
    next(err)
    // console.log(err);
    // res.redirect('register');
  }
  })

  router.delete('/logout', (req, res) => { //delete the session id
    req.logOut();
    res.clearCookie("connect.sid", {doamin: "localhost", path: "/"});

    //logged out and redirect to login

    req.session.destroy(function(error){
      if (error) {
        return next(error);
      }
      res.redirect('/login');
    })
  })


  //helper middleware
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
      return next()
    }
    res.redirect('/login');
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next();
  }


  module.exports = router;
