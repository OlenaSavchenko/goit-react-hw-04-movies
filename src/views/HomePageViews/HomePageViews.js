import React, { Component } from 'react';
import './HomePageViews.css';
import { getPopularMoviesApi } from '../../services/api';

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
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    return (
      <>
        <h1>Popular movies</h1>
        <ul className="PopularMoviesList">
          {popularMovies.map(
            ({
              id,
              title,
              name,
              overview,
              vote_average,
              backdrop_path,
              release_date,
              first_air_date,
            }) => (
              <li key={id} className="PopularMoviesItem">
                {backdrop_path && (
                  <img
                    src={`${baseURL}${backdrop_path}`}
                    alt={title || name}
                  ></img>
                )}
                <h2> {title || name} </h2>
                <p> {overview}</p>
                <p>Date of release: {release_date || first_air_date}</p>
                <p>Average mark: {vote_average}</p>
              </li>
            ),
          )}
        </ul>
      </>
    );
  }
}

export default HomePageViews;
