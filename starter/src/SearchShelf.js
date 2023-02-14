import PropTypes from 'prop-types';
import Book from './Book';

const SearchShelf = ({ query,searchBooks, updateShelf, emptyQuery, updateSearchBooks}) => {
    return (
        <div className="search-books-results">
        <ol className="books-grid">

          {/* select books with shelf by map() if query's result is not empty */}
            { emptyQuery ? (
          searchBooks.map((book) => (  
            <Book key={book.id} book={book} updateShelf={updateShelf} />
          ))
            ):(`Ops no Results of ${query}`)
            }

        </ol>
      </div>
    )
}
SearchShelf.propTypes = {
  query: PropTypes.string.isRequired,
  searchBooks: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  emptyQuery: PropTypes.bool.isRequired,
}
export default SearchShelf;