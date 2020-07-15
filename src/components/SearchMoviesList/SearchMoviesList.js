import React from 'react';
import { Link } from 'react-router-dom';
import SearchMoviesItem from '../SearchMoviesItem';
import './SearchMoviesList.css';

const SearcMoviesList = ({ movies, url }) => (
  <ul className="MoviesList">
    {movies.map(({ id, ...movie }) => (
      <li key={id} className="MoviesItem">
        <Link to={`${url}/${id}`}>
          <SearchMoviesItem movie={movie} />
        </Link>
      </li>
    ))}
  </ul>
);

export default SearcMoviesList;
