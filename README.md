# Movie Finder RESTful API

A RESTful API built with Node.js and Express that connects to the [OMDb (Open Movie Database) API](http://www.omdbapi.com/). It enables clients to search for films by title and fetch detailed metadata using unique IMDb IDs while keeping private API credentials secure.

---

## Features

- **Search Movies:** Query OMDb by film title via URL query parameters.
- **Get Movie Details:** Retrieve full metadata for a specific title using its unique IMDb ID.
- **Request Validation:** Returns a `400 Bad Request` with a descriptive error message if required search parameters are missing.
- **Secure Credentials:** Keeps API keys hidden using `dotenv` and Git ignore rules.
- **Modular MVC Architecture:** Separates routing logic (`routes/`) from request execution and API handling (`controllers/`).
