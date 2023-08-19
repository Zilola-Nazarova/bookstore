import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  const [booksState, setBooksState] = useState([]);

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
