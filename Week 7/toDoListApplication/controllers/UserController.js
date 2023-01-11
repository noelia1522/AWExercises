const {v4: uuidv4} = require("uuid");
const fs = require("fs");
const _ = require("lodash");
const userModel = require("../models/userModel")

async function getUsers(req, res) {
  // const users = await userModel.findOne({age: {$gt: 30 }});
  // console.log(users);
  // res.send(users)
  const user = await userModel.find().populate("parent");
  console.log(user);
  res.send(user);

}

async function getUserByName(req, res){
  // let userDatabaseJSON = fs.readFileSync("./public/storage.json");
  // const userJSON = JSON.parse(userDatabaseJSON);
  // // const task = taskJSON.filter(element => element.id === req.params.id);
  // const user = _.find(userJSON,["id", req.params.id]);
  // res.send(user);
  const user = await userModel.findOne({name: req.params.name});
  user.parent = "63bbfbc5d8185c0cfa54d290";
  await user.save();
  res.send(user);

}

async function createUser(req, res) {

  try{
    const user1 = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      parent: req.body.parent
    });
    console.log(user1);
    console.log("User1 is created");
  }
  catch(error){
    console.log(error.message);
    res.sendStatus(404);
    return;
  }
}


module.exports = {getUserByName, getUsers, createUser}
