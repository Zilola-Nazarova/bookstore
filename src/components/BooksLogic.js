import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  function getInitialBooks() {
    // getting stored books
    const temp = localStorage.getItem('books');
    const savedBooks = JSON.parse(temp);
    return savedBooks || [];
  }

  const [booksState, setBooksState] = useState(getInitialBooks());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(booksState);
    localStorage.setItem('books', temp);
  }, [booksState]);

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooksState([...booksState, newBook]);
  };

  return (
    <div>
      <AddBook addBook={addBook} />
      <BooksList
        bookProps={booksState}
      />
    </div>
  );
};

export default BooksLogic;
