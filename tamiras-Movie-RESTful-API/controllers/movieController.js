//DEPENDANCIES 
const axios = require('axios');


//Search Function 
const searchMovies = async (req, res) => {
  try {
    const response = await axios.get('*OMDB_API_KEY*',{
        params:{
            api_key: process.env.MOVIE_API_KEY,
            search: req.query.q
        }
    })
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req,res)=> {
    try{
        const response = await axios.get('*OMDB_API_KEY*', {
            params: {
                api_key: process.env.MOVIE_API_KEY,
                i: req.query.id
            }
        });
        res.json(results);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}
module.exports = {searchMovies, getMovieById}; 