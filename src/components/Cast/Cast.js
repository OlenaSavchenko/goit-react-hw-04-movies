import React, { Component } from 'react';
import './Cast.css';
import { getCastApi } from '../../services/api';
import defaultImage from '../../img/default.jpg';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await getCastApi(movieId)
      .then(cast => {
        this.setState({ cast: cast });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    return (
      <>
        <div>Cast</div>
        <ul className="Cast-list">
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id} className="Cast-item">
              {profile_path ? (
                <img src={`${baseURL}${profile_path}`} alt={name}></img>
              ) : (
                <img src={defaultImage} alt={name}></img>
              )}

              <div className="Cast-title">
                <p>{name} </p>

                {character && <p> ({character})</p>}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
