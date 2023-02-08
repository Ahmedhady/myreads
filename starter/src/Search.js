import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Search = ({ books, searchBooks }) => {

  const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());
    }
    const showingBooks = query === "" ? books : books.filter((c) =>  c.title.toLowerCase().includes(query.toLowerCase()));
    
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
              </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" value={query} onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
    )
}
Search.propTypes = {
  books: PropTypes.array.isRequired,
  searchBooks: PropTypes.func.isRequired,
}
export default Search;