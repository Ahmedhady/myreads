import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import ListShelfs from "./ListShelfs";
import Search from "./Search";

function App() {
  
  const [books, setBooks] = useState ([]);
  const [query, setQuery]= useState("");
  const [searchBooks, setSearchBooks] = useState ([]);
  const [maxResults, setMaxResults] = useState(0);
  

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

  const handleSearch = async (event) => {
    await setQuery(event.target.value);
    console.log(query);
    handleSearchBooks(query, maxResults);
  }

  const handleSearchBooks = async (query, maxResults) => {
    const res = await BooksAPI.search(query, maxResults);
    setSearchBooks(res);
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <ListShelfs books={books} updateShelf={updateShelf} />}/>
      <Route path="/search" element={
        <Search handleSearch={handleSearch} query={query} searchBooks={searchBooks} />}/>
    </Routes>
  );
}
export default App;
