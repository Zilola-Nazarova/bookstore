import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

const Book = ({
  title, author, id, deleteBook,
}) => (
  <li>
    <div>
      <span>
        {title}
      </span>
      <span>
        {author}
      </span>
      <button type="button" onClick={() => deleteBook(id)}>
        <FaTrash />
      </button>
    </div>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
