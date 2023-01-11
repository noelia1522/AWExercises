const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    // unique: true,
    // uppercase: true,
    // default: "user"
  },
  email: {
    type:String,
    minlenght: 8,

  },
  age: {
    type:Number,
    // min: 18,
    validate: {
      validator: a => a > 18,
      message: "you are under 18! you cannot enter!"
    }
  },
  parent:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" //the ref option is what tells Mongoose which model to use during population
  }
})

module.exports = new mongoose.model("User", userSchema);
