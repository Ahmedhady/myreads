import PropTypes from 'prop-types';
import Book from './Book';

 const Shelf = ({title, books, currShelf, updateShelf}) => {

  const showingBooks = books.filter((book)=> book.shelf === currShelf)

    return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                      {showingBooks.map((book)=>(
                        <Book key={book.id} book={book} updateShelf={updateShelf} />
                      ))}

                </ol>
              </div>
            </div>
    )
 }
 Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
 }
 export default Shelf;