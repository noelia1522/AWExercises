const mongoose = require("mongoose");


const AwardsSchema = new mongoose.Schema({
  wins: Number,
  nominations: Number,
  text: String
});
const MoviesSchema = new mongoose.Schema({
  title: String,
  generes:[String],
  directors:[String],
  awards: AwardsSchema
})

module.exports = new mongoose.model("movies", MoviesSchema);
