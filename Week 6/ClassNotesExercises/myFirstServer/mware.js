const express = require("express");
var static = require('serve-static');


const app = express();
const hostname = "localhost";
const port = 3000;

app.use(express.json());
app.use(static(__dirname +"/public"))

function logger(req, res, next){
  console.log("Request arrived! Thank you!");
  next();
}

function logTime(req, res, next){
  console.log("Date is ", new Date());
  next();
}

// app.use(logTime);
// app.use(logger);


app.get('/' , (req, res) =>{
  // console.log(req.headers);
  // let cookies = req.headers.coockies;
  // if(!cookies){console.log("there is no cookies!");}
  res.sendFile(__dirname +'/index.html');
  // res.send("Hello from server!");
})

app.get("/posts/:name/:city", (req, res)=>{

  let name = req.params.name;
  let city = req?.params?.city;
  res.send(`Hello ${name} from ${city}`)
})

app.get("/contact",(req, res) =>{
  res.sendFile(__dirname + "/contact.html")
} )

app.route("/myform")
.get((req, res) =>{
  console.log("Hi!");

})
.post((req, res) =>{
  let response = {
    username: req.body.user_name,
    email: req.body.user_email
  }
  console.log("Hello!");
  res.end(JSON.stringify(response));
})



app.listen({path: hostname, port: port}, (error) =>{
  if(error) {console.log(error);}
  else{
    console.log("Example app listening on port 3000...");
  }
})
