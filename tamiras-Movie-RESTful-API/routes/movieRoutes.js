// DEPENDENCIES
const express = require('express');
const router = express.Router();

// Import controller functions from ../controllers/movieController
const { searchMovies, getMovieDetails } = require('../controllers/movieController');

// ROUTES
// GET /api/search (prefix /api is handled in server.js)
router.get('/search', searchMovies);

// GET /api/movies/:id
router.get('/movies/:id', getMovieDetails);

// EXPORT
module.exports = router;