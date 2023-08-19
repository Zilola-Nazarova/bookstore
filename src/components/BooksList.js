import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ bookProps }) => (
  <ul>
    {bookProps.map((book) => (
      <Book
        key={book.id}
        author={book.author}
        title={book.title}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  bookProps: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default BooksList;
