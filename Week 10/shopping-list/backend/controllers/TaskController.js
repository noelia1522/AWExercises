const path = require("path");
const taskModel = require("../models/taskModel");


async function createTask(req, res) {
  try{
    const task = await taskModel.create({
    title: req.body.title,
    checked: req.body.checked
  })
  res.send(task)
  // const allTasks = await retrieveTasks();
  // res.render("index", {task: allTasks})
}
  catch(error) {
    console.log(error.message);
    return;
  }

}

async function deleteTask(req, res) {
  console.log("inside delete");
  console.log(req.body);

  const response = await taskModel.deleteOne({_id: req.body._id});
  res.send(response);
  // res.render("index", task = allTasks );
}

async function getTasks(req, res) {
  console.log("inside getTasks");
  const allTasks = await taskModel.find();
  // res.json({_id:1234, title: "washing", quantity: 10});
  res.json(allTasks)
  // res.render("index", task = allTasks );
}

async function retrieveTasks() {
  const allTasks = await taskModel.find();
  return allTasks;

}

function getTaskById(req, res){

  // res.send(task);
}
module.exports = {getTaskById, getTasks, createTask, retrieveTasks, deleteTask}
