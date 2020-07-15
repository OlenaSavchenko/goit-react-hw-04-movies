import React from 'react';
import PopularMoviesItem from '../PopularMoviesItem';
import './PopularMoviesList.css';

const PopularMoviesList = ({ popularMovies }) => {
  return (
    <>
      <h1>Popular movies</h1>
      <ul className="PopularMoviesList">
        {popularMovies.map(({ id, ...popularMovie }) => (
          <li key={id} className="PopularMoviesItem">
            <PopularMoviesItem popularMovie={popularMovie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PopularMoviesList;
