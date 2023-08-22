import { useState, useEffect } from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  function getInitialBooks() {
    // getting stored books from local storage
    const temp = localStorage.getItem('books');
    const savedBooks = JSON.parse(temp);
    return savedBooks || [];
  }

  const [booksState, setBooksState] = useState(getInitialBooks());

  useEffect(() => {
    // storing books in local storage
    const temp = JSON.stringify(booksState);
    localStorage.setItem('books', temp);
  }, [booksState]);

  const deleteBook = (id) => {
    setBooksState([
      ...booksState.filter((book) => book.id !== id),
    ]);
  };

  return (
    <div>
      <AddBook />
      <BooksList
        bookProps={booksState}
        deleteBook={deleteBook}
      />
    </div>
  );
};

export default BooksLogic;
