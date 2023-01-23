const express = require('express')
const router = express.Router();
const Movies = require("../models/Movies");
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')
// const User = require('../models/Users');


//https://www.youtube.com/watch?v=o2ss2LJNZVE

  // router.get('/search', (req, res) => {
  //   res.render('index', results = undefined);
  // })

  router.post('/search', async (req, res) => {
    console.log("in post search");

    const {searchQuery} =  req.body;
    console.log(searchQuery);

    if(searchQuery){
      console.log(searchQuery);
      // const regex = new RegExp(escapeRegex(searchQuery), 'gi');
      // await Movies.find({"title": {'$regex'}})
      // await Movies.find({"title": regex})
      await Movies.aggregate([{
        "$search":{
          "text": {
            "query": searchQuery,
            "path": "title",
            "fuzzy":{} //https://www.mongodb.com/docs/atlas/atlas-search/text/
          }
        }
      },
      {
        "$project":{
          "_id":0,
          "title": 1,
          "awards.wins":1,
          // "score": { "$meta": "searchScore" }
        }
      },
      {
        "$limit": 10,
      },
      {
        "$sort": {
          "awards.wins": -1
        }
      }
      ]

      )
      .then((result) => {
        console.log("in then");
        console.log(result);
        res.render("index", {results : result});
      })
      .catch((error)=> console.log(error))
    }
    else{
      res.render('index.ejs')
    }
    // console.log(req.body);
    // res.send('received')
  });


  router.get("/", checkAuthenticated, (req, res) =>{
    res.render('index.ejs', { name: req.user.name});

  }
  );

  router.get('/login', checkNotAuthenticated, (req, res) => {
    // req.flash('info', 'Please login first!');
    res.render('login.ejs', {message: req.flash("apple")})
  })


  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
      return next();
    }
    req.flash('apple', 'Please login first!') // flash: {"apple":"Please login first! "}
    res.redirect('/login');
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/search');
    }
    next();
  }

 module.exports = router;
