const mongoose = require("mongoose");

//creating new schema
//schemas force a structure
//if you do not use them you don't get an error if age is not a number for example.
//how our user object will be.
//every user in db will have these fields
const userSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  email: {
    type: String,
    minlength: 8,
    required: true,
    // match: //some regex
  },

  age: {
    type: Number,
    validate: {
      validator: a => a > 18,
      message: "you are under 18 and cannot enter",
    }
  },
  task: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Task" //name of the collection we are refering to
  }
})

//we want to export the constructor of the schema above
//we use it in the controller
//User is the name of the collection
module.exports = new mongoose.model("User", userSchema);

//Schema: the design/ the structure of how the users will look like
//Model: actual object I'm going to use
