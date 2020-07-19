import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../ReviewsItem';
import { getReviewsApi } from '../../services/api';

class ReviewsList extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
    }),
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getReviewsApi(movieId)
      .then(reviews => {
        this.setState(reviews);
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    const existingReviews = reviews.length > 0;

    return (
      <>
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
