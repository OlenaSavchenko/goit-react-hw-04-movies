import React, { Component } from 'react';
import { getReviewsApi } from '../../services/api';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    await getReviewsApi(movieId)
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
            {reviews.map(({ id, author, content, url }) => (
              <li key={id}>
                <div>
                  {author}: "{content}"
                </div>
                <p>Find more at: {url} </p>
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

export default Reviews;
