import PropTypes from 'prop-types';
import Book from './Book';

const SearchShelf = ({ query,searchBooks, updateShelf, emptyQuery}) => {
    return (
        <div className="search-books-results">
        <ol className="books-grid">
            { emptyQuery ? (
          searchBooks.map((book) => (
            //<span key={book.id}>{book.title}</span>
            <Book key={book.id} book={book} updateShelf={updateShelf} />
          ))
            ):(`No Results of ${query}`)
            }
        </ol>
      </div>
    )
}
export default SearchShelf;