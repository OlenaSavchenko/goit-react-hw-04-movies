import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchMoviesList from '../components/SearchMoviesList';
import { getMoviesApi } from '../services/api';

class MoviesPageViews extends Component {
  state = {
    movies: [],
    query: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.fetchMovies();
    }
  }

  fetchMovies() {
    const { query } = this.state;
    getMoviesApi(query)
      .then(movies => {
        this.setState({
          movies: movies,
        });
      })
      .catch(error => this.setState({ error }));
  }

  onChangeQuery = query => {
    this.setState({
      query: query,
      movies: [],
      error: null,
    });
  };

  render() {
    const { movies } = this.state;
    const { url } = this.props.match;

    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery}></SearchBar>
        <SearchMoviesList movies={movies} url={url}></SearchMoviesList>
      </>
    );
  }
}

export default MoviesPageViews;
