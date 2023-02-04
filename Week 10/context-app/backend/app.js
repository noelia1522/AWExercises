const express = require('express');
const tasksRouter = require('./routes/tasksRouter');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
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


  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
  

app.use('/', express.static('./public'));
app.use('/tasks', tasksRouter);

mongoose.connect(process.env.DB_LOCAL, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connection successful')
        app.listen(process.env.PORT || 5000, "0.0.0.0", (err) =>{
            if(err) console.log("Server could not be started" + err.message);
            else console.log(`Server listening....`)
        })
    })
    .catch(err => {
        console.error(err.message)
    });


