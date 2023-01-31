const router = require("express"). Router();
const TaskController = require("../controllers/TaskController");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", TaskController.getTasks);
router.get("/:id", TaskController.getTaskById);
router.post("/", urlencodedParser, TaskController.createTask);
router.delete("/remove", TaskController.deleteTask)
router.put("/updateCount", TaskController.updateCount)

module.exports = router;
