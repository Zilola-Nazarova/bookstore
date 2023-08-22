import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

const Book = ({ book }) => {
  const { title, author, category } = book;
  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{category}</h4>
      <FaTrash />
    </li>
  );
};

Book.propTypes = {
  // title: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
