import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchShelf from './SearchShelf';

const Search = ({ handleSearch, query, searchBooks, updateShelf, emptyQuery }) => {
  
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
              </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" value={query} onChange={handleSearch}
              />
            </div>
          </div>
          <SearchShelf query={query} searchBooks={searchBooks} updateShelf={updateShelf} emptyQuery={emptyQuery}/>
        </div>
    )
}
Search.propTypes = {
  searchBooks: PropTypes.array.isRequired,
}
export default Search;