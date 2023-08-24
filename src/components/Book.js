import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import styles from '../styles/Book.module.css';

const Book = ({ book }) => {
  const {
    title,
    author,
    category,
    id,
  } = book;
  const dispatch = useDispatch();

  return (
    <li className={styles.book}>
      <div className={styles.data}>
        <h2>{title}</h2>
        <span>{author}</span>
        <span>{category}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.btn}
          type="button"
        >
          Comment
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove
        </button>
        <button
          className={styles.btn}
          type="button"
        >
          Edit
        </button>
      </div>
      <div className={styles.progress}>
        <div className={styles.progress_chart}>
          <div>chart</div>
          <p>
            <span>64% </span>
            Completed
          </p>
        </div>
        <div className={styles.progress_current}>
          <span>current chapter</span>
          <span>Chapter 3: &quot;A Lesson Learned&quot;</span>
          <button
            className={styles.btn}
            type="button"
          >
            update progress
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
