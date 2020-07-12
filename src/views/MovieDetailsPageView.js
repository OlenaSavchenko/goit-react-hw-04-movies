import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';
import { getMovieApi } from '../services/api';

class MovieDetailsPageView extends Component {
  state = {
    id: null,
    overview: null,
    vote_average: null,
    backdrop_path: null,
    poster_path: null,
    release_date: null,
    first_air_date: null,
    title: null,
    name: null,
    original_language: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    await getMovieApi(movieId)
      .then(response => {
        this.setState({ ...response });
      })
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(routes.movies);
  };

  render() {
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const {
      overview,
      vote_average,
      backdrop_path,
      poster_path,
      release_date,
      first_air_date,
      title,
      name,
      original_language,
      genres,
      id,
    } = this.state;

    const movieImg = backdrop_path || poster_path;
    const movieName = title || name;
    const movieReleaseDate = release_date || first_air_date;
    const isMovieGenres = genres.length > 0;
    const { url, path } = this.props.match;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>
        {movieName && <h1> {movieName}</h1>}
        {movieImg && <img src={`${baseURL}${movieImg}`} alt={movieName}></img>}
        {overview && <p> {overview}</p>}
        {movieReleaseDate > 0 && <p>Date of release: {movieReleaseDate}</p>}
        {vote_average > 0 && <p>Average mark: {vote_average}</p>}
        {original_language && <p>Original language: {original_language} </p>}

        {isMovieGenres && (
          <ul>
            Genre:
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}

        {movieName && (
          <NavLink to={`${url}/${id}`}>
            <p>The cast</p>
          </NavLink>
        )}
        {movieName && (
          <NavLink to={`${url}/${id}`}>
            <p>Reviews</p>
          </NavLink>
        )}

        <Route path={`${path}/:movieId`} component={Cast} />
        <Route path={`${path}/:movieId`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPageView;
