const authController = require('../controllers/authController')
const router = require("express").Router();
const passport = require("passport");

router.get('/', authController.getUser)
router.post('/login', passport.authenticate('local',{failureRedirect: '/login', successRedirect:'/quiz'}),authController.login)
router.post('/register', authController.register);

module.exports = router;
