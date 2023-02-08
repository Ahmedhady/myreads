import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes, useNavigate } from "react-router-dom";
import ListShelfs from "./ListShelfs";
import Search from "./Search";

function App() {
  let navigate = useNavigate();
  
  const [books, setBooks] = useState ([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, [])

  const searchBooks = (book) => {
    const search = async () => {
      const res = await BooksAPI.search(book);
      setBooks(books.concat(res));
    }
    search();
    navigate("/");
  } 

  return (
    <Routes>
      <Route exact path="/" element={
        <ListShelfs books={books} />
      }/>
      <Route path="/search" element={
        <Search books={books} searchBooks={searchBooks} />}/>
    </Routes>
  );
}
export default App;
