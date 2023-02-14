import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  
  const [books, setBooks] = useState ([]);

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
    }

  return (
    <Routes>
      <Route exact path="/" element={
        <Home books={books} updateShelf={updateShelf} />}/>
      <Route path="/search" element={
        <Search books={books} updateShelf={updateShelf} />}/>
    </Routes>
  );
}
export default App;
