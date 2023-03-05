const Movies = require("../models/movies");

   async function getSearchResult(req, res)  {
    console.log("in post search");
    const {searchQuery} =  req.body;

    if(searchQuery){
      console.log(searchQuery);
      await Movies.aggregate([
  {
    '$search': {
      'index': 'movies-autocomplete',
      'autocomplete': {
        'query': searchQuery,
        'path': 'title',
        // 'fuzzy': {}, ////uncomment for having a fuzzy search

      }
    }
  },

      {
        "$project":{
          "_id":0,
          "label": "$title", //change the field name to "label". Needed for MUI Autocomplete component

        }
      },
      {
        "$limit": 20,
      }]

      )
      .then((result) => {
        res.json(result);
      })
      .catch((error)=> console.log(error))
    }
  };

  module.exports = {getSearchResult};
