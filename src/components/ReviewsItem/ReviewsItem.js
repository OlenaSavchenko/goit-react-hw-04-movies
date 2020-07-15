import React from 'react';

const ReviewsItem = ({ review }) => (
  <>
    <div>
      {review.author}: "{review.content}"
    </div>
    <p>Find more at: {review.url} </p>
  </>
);

export default ReviewsItem;
