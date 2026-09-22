//DEPENDANCIES 

const express = require('express');
const router = express.Router(); 

const { searchMovies, getMovieById } = require('');

router.get('*pathname*',searchMovies)
router.get('*pathname*',getMovieById)

module.export = router; 