import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HomeShelf from "./HomeShelf";

const Home =  ({books, updateShelf}) => {

    return (
        <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <HomeShelf title='Currently Reading' currShelf="currentlyReading" books={books} updateShelf={updateShelf} />
            <HomeShelf title='Want To Read' currShelf="wantToRead" books={books} updateShelf={updateShelf} />
            <HomeShelf title='Read' currShelf="read" books={books} updateShelf={updateShelf} />
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">
            Add a book
            </Link>
        </div>
        
      </div>
    )
}
Home.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}
export default Home;