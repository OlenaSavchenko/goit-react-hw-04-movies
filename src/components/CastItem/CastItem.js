import React from 'react';
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

export default CastItem;
