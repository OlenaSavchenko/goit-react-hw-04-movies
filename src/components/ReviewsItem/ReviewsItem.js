import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({ review }) => (
  <>
    <div>
      {review.author}: "{review.content}"
    </div>
    <p>Find more at: {review.url} </p>
  </>
);

ReviewsItem.propTypes = {
  movie: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

ReviewsItem.defaultProps = {
  author: '',
  content: '',
  url: '',
};

export default ReviewsItem;
