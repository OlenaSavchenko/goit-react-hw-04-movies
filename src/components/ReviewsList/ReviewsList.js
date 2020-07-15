import React, { Component } from 'react';
import ReviewsItem from '../ReviewsItem';
import { getReviewsApi } from '../../services/api';

class ReviewsList extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getReviewsApi(movieId)
      .then(reviews => {
        this.setState({ reviews: reviews });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    const existingReviews = reviews.length > 0;

    return (
      <>
        <div>Reviews</div>
        {existingReviews ? (
          <ul>
            {reviews.map(({ id, ...review }) => (
              <li key={id}>
                <ReviewsItem review={review} />
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no Reviews</p>
        )}
      </>
    );
  }
}

export default ReviewsList;
