const {v4: uuidv4} = require("uuid");
const fs = require("fs");
const _ = require("lodash");
const userModel = require("../models/userModel")

async function getUsers(req, res) {
  const users = await userModel.findOne({age: {$gt: 30 }});
  console.log(users);
  res.send(users)

}

function getUserById(req, res){
  // let userDatabaseJSON = fs.readFileSync("./public/storage.json");
  // const userJSON = JSON.parse(userDatabaseJSON);
  // // const task = taskJSON.filter(element => element.id === req.params.id);
  // const user = _.find(userJSON,["id", req.params.id]);
  // res.send(user);
}

async function createUser(req, res) {

  const user1 = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });
  console.log(user1);
  console.log("User1 is created");

}
// createUser();

module.exports = {getUserById, getUsers, createUser}
