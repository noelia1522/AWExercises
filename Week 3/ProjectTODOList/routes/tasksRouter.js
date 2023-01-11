const tasksController = require('../controllers/tasksController')
const router = require("express").Router();


router.post('/',tasksController.createTask);
router.post('/remove', tasksController.removeTask);
//router.post('/tasks/remove/:id', tasksController.removeTask);     //we could also use this endpoint and retrieve id from req.params
router.post('/deleteall', tasksController.deleteAll);
router.get('/', tasksController.getTasks);

module.exports = router;
