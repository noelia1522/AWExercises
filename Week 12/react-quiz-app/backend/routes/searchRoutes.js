const searchController = require('../controllers/searchController')
const router = require("express").Router();

router.post('/',searchController.getSearchResult)

module.exports = router;
