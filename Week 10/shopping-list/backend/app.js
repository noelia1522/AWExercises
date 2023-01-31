const express = require("express");
const static = require("serve-static");
var methodOverride = require('method-override')
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors")

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

// const DB_SERVER = "mongodb://127.0.0.1:27017";
// const database = "todoAppDB";
//connect to db- todoApp database
//this connect is a promise
// mongoose.connect("mongodb://localhost:27017/todoAppDB");
dotenv.config();
const app = express();
// ********* CORS SETUP *************
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    next();
  });

  app.use(
    cors({
      credentials: true,
      allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
    })
  );
  app.set("trust proxy", 1);



const hostname = "localhost";
const port = process.env.PORT || 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(static(__dirname +"/public"));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
//1.
// app.get('/',(req, res)=>{
//   res.sendFile("index.html");
// })
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

// app.get("/", (req, res)=>{
//   res.redirect("/tasks");
// })

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.DB_SERVER}`)
.then(() => {console.log("Connected to database server");})
.catch((err) =>{console.log(err);});

app.listen({path:hostname, port: port}, (error) =>{
  if(error) console.log("Error!");
  else console.log(`Server is running on port ${port}...`);
})
