const Movies = require("../models/MoviesModel");

function goToSearchPage(req, res) {
  res.redirect('/search');
}

function getSearchPage(req, res) {
//   const text = {text: "hello"}

//     res.json(text);
  res.render("index", results = undefined)
}

async function searchMovies(req, res) {
  const {searchQuery} = req.body;
  console.log(searchQuery);
  if(searchQuery){
  await Movies.aggregate([
      {
        "$search":{
          "text":{
            "query": searchQuery,
            "path": "title",
          }
        },

      },
      {
        "$limit": 10,
      }

    ])
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=> console.log(err));

    }
    else{
      res.render("index.ejs")
  }



}

module.exports = {goToSearchPage, getSearchPage, searchMovies}
