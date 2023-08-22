// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Book from './Book';

const BooksList = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          category={book.category}
        />
      ))}
    </ul>
  );
};

// BooksList.propTypes = {
//   bookProps: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
//   deleteBook: PropTypes.func.isRequired,
// };

export default BooksList;
