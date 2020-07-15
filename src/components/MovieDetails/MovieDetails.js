import React from 'react';

const baseURL = 'https://image.tmdb.org/t/p/w500';
const MovieDetails = ({ movie, onButtonClick }) => (
  <>
    <button type="button" onClick={onButtonClick}>
      Back
    </button>
    <h1> {movie.title || movie.name}</h1>
    {(movie.backdrop_path || movie.poster_path) && (
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.name}
      />
    )}
    {movie.overview && <p> {movie.overview}</p>}
    {movie.runtime && <p> {movie.runtime} minutes </p>}
    {movie.original_language && (
      <p>Original language: {movie.original_language} </p>
    )}
    {(movie.release_date || movie.first_air_date) && (
      <p>Date of release: {movie.release_date || movie.first_air_date}</p>
    )}
    {movie.vote_average > 0 && <p>Average mark: {movie.vote_average}</p>}

    {movie.homepage && (
      <p>
        <a href={movie.homepage} rel="noopener noreferrer" target="_blank">
          Homepage
        </a>
      </p>
    )}

    {/* <ul>
      Genres:
      {movie.genres.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> */}
  </>
);

export default MovieDetails;
