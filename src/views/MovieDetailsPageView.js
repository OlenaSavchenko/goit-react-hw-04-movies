import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import CastList from '../components/CastList';
import ReviewsList from '../components/ReviewsList';
import MovieDetails from '../components/MovieDetails';
import routes from '../routes';
import { getMovieApi } from '../services/api';

class MovieDetailsPageView extends Component {
  state = {
    // id: null,
    // overview: null,
    // vote_average: null,
    // backdrop_path: null,
    // poster_path: null,
    // release_date: null,
    // first_air_date: null,
    // title: null,
    // name: null,
    // original_language: null,
    // genres: [],
    movie: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getMovieApi(movieId)
      .then(response => {
        this.setState({ movie: response });
        console.log(this.state);
      })
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(routes.movies);
  };

  render() {
    // const baseURL = 'https://image.tmdb.org/t/p/w500';
    const {
      // overview,
      // vote_average,
      // backdrop_path,
      // poster_path,
      // release_date,
      // first_air_date,
      // title,
      // name,
      // original_language,
      // genres,
      movie,
    } = this.state;

    // const movieImg = backdrop_path || poster_path;
    // const movieName = title || name;
    // const movieReleaseDate = release_date || first_air_date;
    // const isMovieGenres = genres.length > 0;
    const { url } = this.props.match;

    return (
      <>
        <MovieDetails movie={movie} onButtonClick={this.handleGoBack} />

        {/* <button type="button" onButtonClick={this.handleGoBack}>
          Back
        </button>
        {movieName && <h1> {movieName}</h1>}
        {movieImg && <img src={`${baseURL}${movieImg}`} alt={movieName} />}
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
        )} */}

        <NavLink to={`${url}/cast`}>
          <p>The cast</p>
        </NavLink>

        <NavLink to={`${url}/reviews`}>
          <p>Reviews</p>
        </NavLink>

        <Route path={routes.movieCast} component={CastList} />
        <Route path={routes.movieReviews} component={ReviewsList} />
      </>
    );
  }
}

export default MovieDetailsPageView;
