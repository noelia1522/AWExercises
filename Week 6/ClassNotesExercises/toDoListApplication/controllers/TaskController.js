const {v4: uuidv4} = require("uuid");
const fs = require("fs");
const _ = require("lodash");

function createTask(req, res) {
  console.log("new task is :", req.body.newtask);
  let newTask = {id: uuidv4(),  text: req.body.newtask, completed: false};
  let taskDatabaseJSON =fs.readFileSync("public/storage.json");
  const taskJSON = JSON.parse(taskDatabaseJSON);
  console.log(taskJSON);
  taskJSON.push(newTask);
  fs.writeFile("./public/storage.json", JSON.stringify(taskJSON, null, 2), (err)=>{
    if(err) console.log("Error");
    else console.log("Task is added to the storage file!");
  })

  res.render("index", task = taskJSON);
}

function getTasks(req, res) {
  let taskDatabaseJSON =fs.readFileSync("./public/storage.json");
  const taskJSON = JSON.parse(taskDatabaseJSON);
  res.render("index", task = taskJSON);
}

function getTaskById(req, res){
  let taskDatabaseJSON =fs.readFileSync("./public/storage.json");
  const taskJSON = JSON.parse(taskDatabaseJSON);
  // const task = taskJSON.filter(element => element.id === req.params.id);
  const task = _.find(taskJSON,["id", req.params.id]);
  res.send(task);
}
module.exports = {getTaskById, getTasks, createTask}
