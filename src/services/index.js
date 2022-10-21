import { omdb_apikey } from "../config";
import axios from "axios";

// get movies data
export const getMovies = async (data) => {
    const url = `https://www.omdbapi.com/?apikey=${omdb_apikey}&s=${data.title}`;
    return await axios.get(url).then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
      return { err: err.response && err.response.data || err };
    })
};

// get movie detail;
export const getMovie = async (data) => {
  const url = `https://www.omdbapi.com/?apikey=${omdb_apikey}&i=${data.id}`;
  return await axios.get(url).then(response => {
    return response.data;
  }).catch(err => {
    console.log(err);
    return { err: err.response && err.response.data || err };
  })
};
