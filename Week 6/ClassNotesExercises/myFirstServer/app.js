const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function(req, res){

  if(req.method === "GET")
    // if(req.url === "/"){

    //   // send plain text
    //   console.log("Hello World!");
    //   res.writeHead(200, {"Content-type": "text/plain"});
    //   res.write("Hello from server!")
    //   res.end();

    // }

    //send json object
    if(req.url === "/weather"){
      let jsonObj = {weather: "rainy"};
      res.writeHead(200, {"Content-type": "application/json"});
      let jsonData = JSON.stringify(jsonObj);
      res.end(jsonData);
    }

    //send html
    // if(req.url === "/contact"){
    //   res.writeHead(200, {"Content-type": "text/html"});
    //   res.write("<h1> This is my contact infromation</h1>")
    //   res.end();
    // }

    //send html file
    if(req.url === "/contact"){
      res.writeHead(200, {"Content-type": "text/html"});
      let htmlFile = fs.readFile("contact.html", (err, data) =>{
        if(err) {console.log(err);}
        else {res.end(data);}
      })

    }

    //send csv file
    if(req.url === "/user"){

      res.setHeader("Content-Disposition", "inline");
      res.writeHead(200, {"Content-type": "text/csv"});
      res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`)

    }
    //send __dirname
    if(req.url === "/path"){
      res.writeHead(200, {"Content-type": "text/plain"});
      res.write(__filename);
      res.end();
    }

    // cehck extensions
    //send error (400)
    if (path.extname(req.url) !== ".html"){
      console.log("Error!");
      res.writeHead(400, "Content-type:text/plain");
      res.write("extension error")
      res.end();
    }


})


server.listen({path:'localhost.com', port:8080}, (error) =>{

  if(error) {console.log("Something is wrong!");}
  else{
    console.log("server is running on port 8080...");
  }
})
