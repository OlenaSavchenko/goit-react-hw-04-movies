import React, { Component } from 'react';
import CastItem from '../CastItem';
import { getCastApi } from '../../services/api';
import './CastList.css';

class CastList extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getCastApi(movieId)
      .then(cast => {
        this.setState({ cast: cast });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast.length > 0 ? (
          <ul className="CastList">
            {cast.map(({ id, ...castItem }) => (
              <li key={id} className="CastItem">
                <CastItem castItem={castItem} />
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no information about cast</p>
        )}
      </>
    );
  }
}

export default CastList;
