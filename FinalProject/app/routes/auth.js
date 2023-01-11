const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

router.get("/logout", authController.logout);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/getuser", authController.getUser);

module.exports = router;
