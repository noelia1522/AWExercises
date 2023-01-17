const mongoose = require("mongoose");

const AwardsSchema = new mongoose.Schema({
    wins: Number,
    nominations: Number,
    text: String
});

const MoviesSchema = new mongoose.Schema({
  name: String,
  awards: AwardsSchema,
  genres: [String],
  directors: [String]
})

module.exports = new mongoose.model("movies", MoviesSchema);
