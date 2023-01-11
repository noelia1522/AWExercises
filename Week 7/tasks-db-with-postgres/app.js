const express = require('express');
const app = express();
const dotenv =require("dotenv");
const todoRoutes = require("./routes/todoRoutes");

const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use('/', todoRoutes);

app.listen(port, "localhost", (error) =>{
  if (error) console.log("Server could not be started...");
  else console.log(`Server listening at port ${port}....`);
})
