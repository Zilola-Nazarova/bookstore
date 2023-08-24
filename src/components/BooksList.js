import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.books);
  
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      { isLoading === true ? (
        <p>The books list is loading!</p>
      ) : error ? (
        <p>Something went wrong!
          <br />
          { error }
        </p>
      ) : (
        <ul>
          {books.map((book) => (
            <Book
              key={book.item_id}
              book={book}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default BooksList;
