const pool = require('../config/db');

async function createTODO(req, res){

  try{
  const {description} =req.body;
  const newTask = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
  // console.log(newTask);
  res.json(newTask.rows[0])
  }
  catch(error){
    console.log(error.message);
    return;
  }

}

async function getTODOs(req, res) {

  try{
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)
  }
  catch(err){
    console.log(err);
  }

}

async function deleteTODOById(req, res) {
  const id = req.params.id;
  const deletedItem = await pool.query(`DELETE FROM todo WHERE todo_id = ${id} RETURNING *`);
  console.log(deletedItem);
  res.json(deletedItem);

}

async function updateDescription(req,res) {
  const {id, newDescription} = req.body;
  console.log(id, newDescription);
  const updatedItem = await pool.query(`UPDATE todo SET description = '${newDescription}' WHERE todo_id = ${id} RETURNING *`);
  res.json(updatedItem.rows[0]);

}

module.exports = {getTODOs, createTODO, deleteTODOById, updateDescription};
