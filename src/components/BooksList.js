import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>The books list is loading!</p>;
  }
  if (error) {
    return (
      <p>
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  if (books.length !== 0) {
    return (
      <ul className="books-list">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </ul>
    );
  }
  return <p>No books found!</p>;
};

export default BooksList;
