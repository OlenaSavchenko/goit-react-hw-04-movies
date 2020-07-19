import React from 'react';
import PropTypes from 'prop-types';
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

PopularMoviesItem.propTypes = {
  popularMovie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

PopularMoviesItem.defaultProps = {
  title: '',
  name: '',
  backdrop_path: '',
  overview: '',
  release_date: '',
  first_air_date: '',
  vote_average: null,
};

export default PopularMoviesItem;
