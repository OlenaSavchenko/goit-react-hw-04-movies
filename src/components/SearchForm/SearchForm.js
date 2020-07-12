import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchData: '',
  };

  handleDataSearch = event => {
    const inputDataValue = event.currentTarget.value;
    this.setState({ searchData: inputDataValue });
  };

  handleDataSubmit = event => {
    event.preventDefault();
    const { searchData } = this.state;
    const normalizeSearchData = searchData.toLowerCase();
    this.props.onSubmit(normalizeSearchData);
  };

  render() {
    const { searchData } = this.state;
    return (
      <form className="SearchForm" onSubmit={this.handleDataSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchData}
          onChange={this.handleDataSearch}
        />
      </form>
    );
  }
}
export default SearchForm;
