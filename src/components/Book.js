import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{category}</h4>
      <button
        type="button"
        onClick={() => dispatch(deleteBook(book.item_id))}
      >
        <FaTrash />
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
