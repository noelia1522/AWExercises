const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  count:{
    type: Number
  }
})

module.exports = new mongoose.model("Task", taskSchema);
