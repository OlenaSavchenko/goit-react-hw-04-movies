import React, { Component } from 'react';
import PopularMoviesList from '../components/PopularMoviesList/';

import { getPopularMoviesApi } from '../services/api';

class HomePageViews extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    getPopularMoviesApi()
      .then(movies => this.setState({ popularMovies: movies }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { popularMovies } = this.state;
    return <PopularMoviesList popularMovies={popularMovies} />;
  }
}

export default HomePageViews;
