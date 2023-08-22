// import { useState, useEffect } from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

const BooksLogic = () => {
  // function getInitialBooks() {
  //   // getting stored books from local storage
  //   const temp = localStorage.getItem('books');
  //   const savedBooks = JSON.parse(temp);
  //   return savedBooks || [];
  // }

  // const [booksState, setBooksState] = useState(getInitialBooks());

  // useEffect(() => {
  //   // storing books in local storage
  //   const temp = JSON.stringify(booksState);
  //   localStorage.setItem('books', temp);
  // }, [booksState]);

  return (
    <div>
      <AddBook />
      <BooksList />
    </div>
  );
};

export default BooksLogic;
