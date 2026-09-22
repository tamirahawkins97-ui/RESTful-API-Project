// DEPENDENCIES
const axios = require('axios');

const OMDB_BASE_URL = 'http://www.omdbapi.com/';

// Search Function (GET /api/search)
const searchMovies = async (req, res) => {
  // 1. Validation: check if the title query parameter is missing
  if (!req.query.title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  try {
    // 2. Fetch movies using 's' and your env apikey
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        s: req.query.title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Movie Details Function (GET /api/movies/:id)
const getMovieDetails = async (req, res) => {
  try {
    // Fetch details using 'i' and req.params.id
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        i: req.params.id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EXPORT
module.exports = {
  searchMovies,
  getMovieDetails,
};