import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';
import styles from '../styles/AddBook.module.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setMessage('');
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(createBook({
        title,
        author,
        item_id: uuidv4(),
        category: 'category',
      }));
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please add title and author');
    }
  };

  return (
    <>
      <form className={styles.add_book} onSubmit={handleSubmit}>
        <fieldset>
          <legend>add new book</legend>
          <input
            type="text"
            placeholder="Add Title..."
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Add Author..."
            value={author}
            onChange={handleAuthorChange}
          />
          <select name="categories" id="categories">
            <option value="" disabled selected>Category</option>
            <option value="action">Action</option>
            <option value="economy">Economy</option>
            <option value="science-fiction">Science Fiction</option>
          </select>
          <button
            className={styles.btn}
            type="submit"
          >
            add book
          </button>
        </fieldset>
      </form>
      <span>{message}</span>
    </>
  );
};

export default AddBook;
