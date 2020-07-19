import React, { Component } from 'react';
import CastItem from '../CastItem';
import PropTypes from 'prop-types';
import { getCastApi } from '../../services/api';
import './CastList.css';

class CastList extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
    }),
  };

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
        <ul className="CastList">
          {cast.map(({ id, ...castItem }) => (
            <li key={id} className="CastItem">
              <CastItem castItem={castItem} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CastList;
