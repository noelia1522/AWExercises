const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasksRouter');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const app = express();



dotenv.config();


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


  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({
    secret: "your secret line of secretness",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.sendFile(__dirname + '/public/login.html'));

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
})

app.use('/tasks', tasksRouter);


//const server = '127.0.0.1:27017'; // REPLACE IF ON ATLAS
//const database = 'tasks';      // THE DB NAME

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_LOCAL, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connection successful')
        app.listen(port, "localhost", (err) =>{
            if(err) console.log("Server could not be started" + err.message);
            else console.log(`Server listening at port ${port}....`)
        })
    })
    .catch(err => {
        console.error(err.message)
    });


    function isLoggedIn(req, res, next) {
        if (req.user) {
           return next();
        }
        return res.redirect("/login");
     };
