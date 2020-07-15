import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import CastList from '../components/CastList';
import ReviewsList from '../components/ReviewsList';
import MovieDetails from '../components/MovieDetails';
import routes from '../routes';
import { getMovieApi } from '../services/api';

class MovieDetailsPageView extends Component {
  state = {
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
    const { movie } = this.state;

    const { url } = this.props.match;

    return (
      <>
        <MovieDetails movie={movie} onButtonClick={this.handleGoBack} />

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
