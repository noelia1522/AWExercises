const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require("mongoose");
const searchRoutes = require("./routes/searchRoutes")

const app = express()
// app.use(express.json())
//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine','ejs');
port = process.env.PORT || 3000;

app.use("/", searchRoutes)

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
.then(() => {
  console.log("Connected to the Database...");

  app.listen(process.env.PORT, "localhost", (err) =>{
  if(err) console.log("Server could not be started...");
  else console.log(`Server listening on port ${process.env.PORT}`);
  })
})
.catch(err => console.log(err.message));
