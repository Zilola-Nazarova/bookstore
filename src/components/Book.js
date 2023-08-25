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
        <h3>{author}</h3>
        <h4>{category}</h4>
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
        <div className={styles.pr_chart}>
          <div className={styles.circle}> </div>
          <p>
            <span className={styles.percentage}>64% </span>
            <br />
            <span>Completed</span>
          </p>
        </div>
        <div className={styles.pr_current}>
          <span>current chapter</span>
          <h3>Chapter 3: &quot;A Lesson Learned&quot;</h3>
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
