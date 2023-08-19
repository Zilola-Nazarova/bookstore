import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <div>
      <span>
        {title}
      </span>
      <span>
        {author}
      </span>
    </div>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
