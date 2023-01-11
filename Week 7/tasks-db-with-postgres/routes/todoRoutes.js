const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get('/', TodoController.getTODOs);
router.post('/', TodoController.createTODO)
router.delete('/delete/:id', TodoController.deleteTODOById);
router.put('/update', TodoController.updateDescription);

module.exports = router;
