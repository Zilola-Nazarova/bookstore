import PropTypes from 'prop-types';
import { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

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
      addBook(title, author);
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please add title and author');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">
          ADD BOOK
        </button>
      </form>
      <span>{message}</span>
    </>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
