import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../img/default.jpg';
import './CastItem.css';

const baseURL = 'https://image.tmdb.org/t/p/w500';

const CastItem = ({ castItem }) => (
  <>
    <img
      src={
        castItem.profile_path
          ? `${baseURL}${castItem.profile_path}`
          : defaultImage
      }
      alt={castItem.name}
    />

    <div className="CastTitle">
      <p>{castItem.name} </p>

      {castItem.character && <p> ({castItem.character})</p>}
    </div>
  </>
);

CastItem.propTypes = {
  castItem: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
  }).isRequired,
};

CastItem.defaultProps = { profile_path: defaultImage, character: '' };

export default CastItem;
