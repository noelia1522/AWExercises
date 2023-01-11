const express = require("express");
const bodyParser = require('body-parser');
// var static = require('serve-static')

const app = express();
const hostname = "localhost";
const port = 3000;

app.use(express.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));

app.get('/' , (req, res) =>{
  console.log(req.headers);
  let cookies = req.headers.coockies;
  if(!cookies){console.log("there is no cookies!");}
  res.sendFile(__dirname +'/index.html');
  res.send("Hello from server!");
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
.post(urlencodedParser ,(req, res) =>{
  let response = {
    username: req.body.user_name,
    email: req.body.user_email
  }
  console.log("Hello!");
  res.end(JSON.stringify(response));
})

// app.get("/myform", (req, res) =>{
//   console.log("Hi!");
// })
// app.post("/myform", urlencodedParser ,(req, res) =>{
//   let response = {
//     username: req.body.user_name,
//     email: req.body.user_email
//   }
//   console.log("Hello!");
//   res.end(JSON.stringify(response));

// })
app.post("/test", urlencodedParser ,(req, res) =>{
  console.log(req.body.username);
  res.send("Received!");

})



app.listen({path: hostname, port: port}, (error) =>{
  if(error) {console.log(error);}
  else{
    console.log("Example app listening on port 3000...");
  }
})
