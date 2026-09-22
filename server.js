// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const movieRoutes = require('./tamiras-Movie-RESTful-API/routes/movieRoutes');
const app = express();
const PORT = 1098;

// MIDDLEWARE (parse incoming JSON if needed)
// app.use(express.json());

// ROUTES
// Mount all movie routes with the /api prefix
app.use('/api', movieRoutes);

// LISTENER
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});