const userModel = require("../models/userModel");
const { retrieveTasks } = require("./TaskController");
const path = require("path");

// function getUsers(req, res) {
//   // let userDatabaseJSON = fs.readFileSync("./public/storage.json");
//   // const userJSON = JSON.parse(userDatabaseJSON);
//   // res.render("user", user = userJSON);
//   //2
//   const user = {name: "AllWomen"};
//   res.json(user);


// }

//4
async function getUsers(req, res) {

//1
// const user2 = await userModel.find({});
// console.log(user2);
// res.send(user2)

//2
//try findOne
//   const user2 = await userModel.findOne({ age: {$gt: 45}});
//   console.log(user2);
//   res.send(user2)
// }

//3
//Add :name to router
// router.get("/:name", UserController.getUsers);
const user2 = await userModel.find();
// .populate("parent"); //show all of the properties of parent
//One way to update something in DB
  console.log(user2);
  res.send(user2)
}

async function getUserByName(req, res){

  const user = await userModel.findOne({name: req.params.name});
  user.parent = "63bb157cee73ae0a5eb75716";
  await user.save();
  // let userDatabaseJSON = fs.readFileSync("./public/storage.json");
  // const userJSON = JSON.parse(userDatabaseJSON);
  // // const task = taskJSON.filter(element => element.id === req.params.id);
  // const user = _.find(userJSON,["id", req.params.id]);
  res.send(user);
}

//1
// async function createUser() {
  // //.create is a defined method in mongoose
  // console.log("inside create user");
  // const user1 = await userModel.create({
  //   // name: "Sarah",
  //   email:"sara@gmail.com",
  //   age: 45
  // }, (error) => console.log(error));
  // // console.log("user1 is created!");
  // // console.log(user1);
// }
// createUser();


//2
// async function getUsers(req, res) {

//   console.log("inside create user");
//   const user1 = await userModel.create({
//     name: "Adriana",
//     email:"adr@gmail.com",
//     age: 45
//   }, (error) => console.log(error));

//   console.log("user1 is created!");
//   res.send("user1 is");


// }

//3
async function createUser(req, res) {

  try{
  const user = await userModel.create({
    name: req.body.name,
    email:req.body.email,
    age: req.body.age
  })}
  catch(error) {
    console.log(error.message);
    return;
  }
  // res.sendFile(path.join(__dirname, '..', 'public', 'tasks.html'));
  // res.redirect("tasks.html");
 const allTasks = await retrieveTasks();
 console.log(allTasks);
  res.render("index", task = allTasks )
}

module.exports = {getUserByName, getUsers, createUser}
