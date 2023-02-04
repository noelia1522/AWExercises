let Task = require('../models/taskModel')

async function createTask(req, res) {
    try{
        const task = await Task.create({task: req.body.task});
        res.status(200).json({
            success: true,
            task,
        })    
        }catch(err) {
        console.error(err.message);
     }
         
};

function removeTask(req, res) {

    var completeTask = req.params.id;

    Task.deleteOne( {_id: completeTask}, function(error){
        if (error) console.log(error);
        res.status(200).json({
            success: true,
            message: `deleted task ${completeTask}`
        })        
    });
};

function deleteAll(req, res) {
    Task.deleteMany({})
    .then(() => {
        res.status(200).json({
            success: true,
            message: `All tasks deleted`
        }) ;
    })
    .catch(error => {
        console.log(error);
        next(error);
    });
};

function getTasks(req, res) {
    Task.find().sort('task').limit(10)
    .then(task => {
        res.status(200).json(task)
      })
    .catch(error => {
        console.log(error);
        next(error);
    });
};

module.exports = {getTasks, deleteAll, removeTask, createTask}