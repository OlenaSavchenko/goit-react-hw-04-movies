import React from 'react';
import PropTypes from 'prop-types';
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

PopularMoviesList.propTypes = {
  popularMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PopularMoviesList;
