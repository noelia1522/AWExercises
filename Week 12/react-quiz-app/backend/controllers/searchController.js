const Movies = require("../models/movies");

   async function getSearchResult(req, res)  {
    console.log("in post search");
    const {searchQuery} =  req.body;

    if(searchQuery){
      console.log(searchQuery);
      await Movies.aggregate([
        {
    "$search": {
      "compound": {
        "must": [{
          "text": {
            "query": searchQuery,
            "path": "title"
          }
        }],
        "should": [{
          //  'index':"movies-autocomplete",
          "autocomplete": {
            "query": searchQuery,
            "path": "title"
          }
        }]
      }
    }
  },
      {
        "$project":{
          "_id":0,
          "label": "$title", //change the field name to "label". Needed for MUI Autocomplete component
          score: { $meta: "searchScore" }

        }
      },
      {
        "$limit": 10,
      },
      {"$sort": {
        "score": -1
      }}

  // {
  //   '$search': {
  //     // 'index': 'movies-autocomplete',
  //     'index':"default",
  //     //'autocomplete': {
  //       text:{
  //       'query': searchQuery,
  //       'path': 'title',
  //       'fuzzy': {}, ////uncomment for having a fuzzy search

  //     },
  //   }
  // },

  //     {
  //       "$project":{
  //         "_id":0,
  //         "label": "$title", //change the field name to "label". Needed for MUI Autocomplete component
  //         score: { $meta: "searchScore" }

  //       }
  //     },
  //     {
  //       "$limit": 5,
  //     },
  //     {"$sort": {
  //       "score": -1
  //     }}
    ]

      )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((error)=> console.log(error))
    }
  };

  module.exports = {getSearchResult};
