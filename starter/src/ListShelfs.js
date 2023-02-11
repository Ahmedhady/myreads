import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Shelf from "./Shelf";

const ListShelfs =  ({books, updateShelf}) => {

    return (
        <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Shelf title='Currently Reading' currShelf="currentlyReading" books={books} updateShelf={updateShelf} />
            <Shelf title='Want To Read' currShelf="wantToRead" books={books} updateShelf={updateShelf} />
            <Shelf title='Read' currShelf="read" books={books} updateShelf={updateShelf} />
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
ListShelfs.propTypes = {
    books: PropTypes.array.isRequired,
}
export default ListShelfs;