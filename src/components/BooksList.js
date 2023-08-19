import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ bookProps, deleteBook }) => (
  <ul>
    {bookProps.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        author={book.author}
        title={book.title}
        deleteBook={deleteBook}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  bookProps: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BooksList;
