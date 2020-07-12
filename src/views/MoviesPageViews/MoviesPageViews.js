import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import './MoviePagesViews.css';
import { getMoviesApi } from '../../services/api';

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

  async fetchMovies() {
    const { query } = this.state;
    await getMoviesApi(query)
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
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery}></SearchBar>
        <ul className="MoviesList">
          {movies.map(({ id, title, name, backdrop_path, poster_path }) => (
            <li key={id} className="MoviesItem">
              <Link to={`${url}/${id}`}>
                {(backdrop_path || poster_path) && (
                  <div className="MoviesThummb">
                    <img
                      src={`${baseURL}${backdrop_path || poster_path}`}
                      alt={title || name}
                      width="100"
                    ></img>
                  </div>
                )}
                <p>{title || name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPageViews;
