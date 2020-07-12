import axios from 'axios';

const key = '6e09ebe9f547368140ae2e8c44013351';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMoviesApi = query => {
  return axios
    .get(
      `search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`,
    )
    .then(response => response.data.results);
};

export const getMovieApi = movieId => {
  return axios
    .get(`movie/${movieId}?api_key=${key}&language=en-US`)
    .then(response => response.data);
};

export const getPopularMoviesApi = () => {
  return axios
    .get(`trending/all/day?api_key=${key}`)
    .then(response => response.data.results);
};

export const getCastApi = movieId => {
  return axios
    .get(`movie/${movieId}/credits?api_key=${key}`)
    .then(response => response.data.cast);
};

export const getReviewsApi = movieId => {
  return axios
    .get(`movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`)
    .then(response => response.data.results);
};
