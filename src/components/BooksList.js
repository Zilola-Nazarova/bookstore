// import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = () => {
  const booksData = [
    {
      title: 'AAA',
      author: '111',
    },
    {
      title: 'BBB',
      author: '222',
    },
    {
      title: 'CCC',
      author: '333',
    },
    {
      title: 'DDD',
      author: '444',
    },
  ];
  return (
    <ul>
      {booksData.map((book) => (
        <Book
          key={book.title}
          author={book.author}
          title={book.title}
        />
      ))}
    </ul>
  );
};

// BooksList.propTypes = {
//   booksData: PropTypes.array,
// }

export default BooksList;
