import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import SearchShelf from './SearchShelf';

const Search = ({ updateShelf, books }) => {

  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState ([]);
  const [emptyQuery, setEmptyQuery] = useState (false);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setQuery(query);
    // check if 'query' is not an empty string before calling the API
    // Clear the page if 'query' is empty
    const res = await BooksAPI.search(query);
    // validate 'res' before doing the next line, and implement all requirements in the rubric.
    if (res && !res.error) {
    //5
    setSearchBooks(res);
    setEmptyQuery(true);
    } else {
    setSearchBooks([]);
    setEmptyQuery(false);
    }
  }

  const updateSearchBooks = searchBooks.map((inquery)=> {
    const bookFound = books.find((book) => book.id === inquery.id )
      if (bookFound) {
        inquery.shelf = bookFound.shelf;
      } else {
        inquery.shelf = 'none';
      }
      return inquery;
      })

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
          <SearchShelf query={query} searchBooks={searchBooks} updateShelf={updateShelf} emptyQuery={emptyQuery} updateSearchBooks={updateSearchBooks} />
        </div>
    )
}
Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}
export default Search;