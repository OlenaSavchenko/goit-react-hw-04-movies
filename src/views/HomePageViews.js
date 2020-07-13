import React, { Component } from 'react';
import PopularMovies from '../components/PopularMovies';

import { getPopularMoviesApi } from '../services/api';

class HomePageViews extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    await getPopularMoviesApi()
      .then(movies => this.setState({ popularMovies: movies }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { popularMovies } = this.state;
    return <PopularMovies popularMovies={popularMovies} />;
  }
}

export default HomePageViews;
