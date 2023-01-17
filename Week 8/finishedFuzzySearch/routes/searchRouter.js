const express = require('express')
const router = express.Router();
const Movies = require("../models/Movies");
// const {Fuse} = require("fuse.js")
// const { BadRequest } = require('../utils/errors');

//https://www.youtube.com/watch?v=o2ss2LJNZVE

  router.get('/search', (req, res) => {
    res.render('index', results = undefined);
  })

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



 module.exports = router;
