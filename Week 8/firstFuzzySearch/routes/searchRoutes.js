const express = require('express');
const router = express.Router();
const {goToSearchPage, getSearchPage, searchMovies } = require('../controllers/searchController')

// router.get('/', goToSearchPage);
router.get('/search', getSearchPage)
router.post('/search', searchMovies)

module.exports = router;
