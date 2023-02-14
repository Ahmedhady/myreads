import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  
  const [books, setBooks] = useState ([]);
  const [query, setQuery]= useState("");
  const [searchBooks, setSearchBooks] = useState ([]);
  const [emptyQuery, setEmptyQuery] = useState (false);
  //const [updateBook, setUpdateBook] = useState("");
  
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, [])

  const updateShelf = async (book, shelf) => { 
      await BooksAPI.update(book, shelf);
      const res = await BooksAPI.getAll();
      setBooks(res);
      //handleSearch(query);
    }

    const handleSearch = async (event) => {
      const query = event.target.value;
      setQuery(query);
      console.log(query);   
      // check if 'query' is not an empty string before calling the API
      // Clear the page if 'query' is empty
      const res = await BooksAPI.search(query);
      // validate 'res' before doing the next line, and implement all requirements in the rubric.
      if (res && !res.error) {
        //1
        //2
      const updateBook = res.map((inquery)=> {
          //books.forEach((book)=> {
            //if (inquery.id === book.id ) inquery.shelf = book.shelf
            //3
            const bookFound=   books.find((book) => book.id === inquery.id )
            //4
              if (bookFound) {
                inquery.shelf = bookFound.shelf;
              } else {
                inquery.shelf = 'none';
              }
               //return (inquery.id === book.id && inquery.shelf === book.shelf) 
               //else return book.shelf = 'none'
          //})
        return inquery;
      })
      //5
      setSearchBooks(updateBook);
      setEmptyQuery(true);
      } else {
      setSearchBooks([]);
      setEmptyQuery(false);
      }
      console.log(searchBooks);
    }

  return (
    <Routes>
      <Route exact path="/" element={
        <Home books={books} updateShelf={updateShelf} />}/>
      <Route path="/search" element={
        <Search handleSearch={handleSearch} query={query} searchBooks={searchBooks} updateShelf={updateShelf} emptyQuery={emptyQuery}/>}/>
    </Routes>
  );
}
export default App;
