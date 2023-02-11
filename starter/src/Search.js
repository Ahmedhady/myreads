import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Search = ({ handleSearch, search, searchBooks }) => {
  
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
              </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" onChange={handleSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchBooks.map((book) => (
                <span>{book.title}</span>
              ))}
            </ol>
          </div>
        </div>
    )
}
Search.propTypes = {
  searchBooks: PropTypes.array.isRequired,
}
export default Search;