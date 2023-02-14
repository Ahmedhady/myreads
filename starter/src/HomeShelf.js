import PropTypes from 'prop-types';
import Book from './Book';

 const HomeShelf = ({title, books, currShelf, updateShelf}) => {
    return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                      {/* select books to get correct shelf by Combining map() And filter() Together */}
                      {books.filter((book)=> book.shelf === currShelf).map((book)=>(
                        <Book key={book.id} book={book} updateShelf={updateShelf} />
                      ))}

                </ol>
              </div>
            </div>
    )
 }
 HomeShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    currShelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,
 }
 export default HomeShelf;