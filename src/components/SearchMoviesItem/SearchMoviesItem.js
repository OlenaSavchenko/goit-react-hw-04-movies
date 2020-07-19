import React from 'react';
import PropTypes from 'prop-types';
import './SearchMoviesItem.css';
import defaultImage from '../../img/default.jpg';

const baseURL = 'https://image.tmdb.org/t/p/w500';
const SearchMoviesItem = ({ movie }) => (
  <>
    <div className="MoviesThummb">
      <img
        src={
          movie.backdrop_path || movie.poster_path
            ? `${baseURL}${movie.backdrop_path || movie.poster_path}`
            : defaultImage
        }
        alt={movie.title || movie.name}
        width="100"
      />
    </div>

    <p>{movie.title || movie.name}</p>
  </>
);

SearchMoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};

SearchMoviesItem.defaultProps = {
  title: '',
  name: '',
  backdrop_path: '',
  poster_path: '',
};
export default SearchMoviesItem;
