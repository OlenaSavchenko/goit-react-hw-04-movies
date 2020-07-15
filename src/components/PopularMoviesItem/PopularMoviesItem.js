import React from 'react';
import defaultImage from '../../img/default.jpg';
const baseURL = 'https://image.tmdb.org/t/p/w500';

const PopularMoviesItem = ({ popularMovie }) => (
  <>
    <img
      src={
        popularMovie.backdrop_path
          ? `${baseURL}${popularMovie.backdrop_path}`
          : defaultImage
      }
      alt={popularMovie.title || popularMovie.name}
    />

    <h2> {popularMovie.title || popularMovie.name} </h2>
    <p> {popularMovie.overview}</p>
    <p>
      Date of release:
      {popularMovie.release_date || popularMovie.first_air_date}
    </p>
    <p>Average mark: {popularMovie.vote_average}</p>
  </>
);

export default PopularMoviesItem;
