import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const useBooks = () => {
  const { books, setBooks } = useContext(BookContext);

  const addBook = (book) => setBooks([...books, book]);
  const removeBook = (id) => setBooks(books.filter(book => book.id !== id));
  const toggleRead = (id) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, read: !book.read } : book
    ));
  };

  return { books, addBook, removeBook, toggleRead };
};