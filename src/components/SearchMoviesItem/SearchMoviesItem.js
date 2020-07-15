import React from 'react';
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
export default SearchMoviesItem;
