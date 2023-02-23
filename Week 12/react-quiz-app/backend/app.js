const express = require('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')
const initializePassport = require('./config/passport-config');
const passport = require('passport');
const authRouter = require('./routes/authRoutes')
const errorHandler = require('./middleware/errorhandler')

initializePassport(passport)
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.set('strictQuery', true);

const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_DB,
  collection: "sessions"
})
app.use(session({
  secret: process.env.SECRET,
  resave:true,
  saveUninitialized: true,
  store: sessionStore,
  cookie:{
    maxAge:1000* 60 * 60 * 24,
  }

}))

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=>{
  // console.log(req.session);// by express-session
  // console.log(req.user); // by passport
  next();
})

app.use('/users', authRouter)
app.use(errorHandler)

// app.get('/', (req,res)=>{
//   if(req.session.viewCount) req.session.viewCount++;
//   else req.session.viewCount = 1;
//   res.json({message:"home page"})
//   console.log(req.session);
// })



mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true})
.then(()=>{
  console.log("Connected to the Database successfully");
  app.listen(port, "127.0.0.1", (err)=>{
    if(err)console.log("Server could not be started, err");
    else console.log(`server is running on port ${port}...`);
  })
})
.catch((err)=>{
  console.log("Database connection error!");
  console.log(err);
})
const port= process.env.PORT || 5000;
