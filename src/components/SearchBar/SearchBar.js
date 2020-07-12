import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => (
  <header className="Searchbar">
    <SearchForm onSubmit={onSubmit} />
  </header>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
