import { useSelector } from 'react-redux/es/hooks/useSelector';
import Book from './Book';

const BooksList = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
