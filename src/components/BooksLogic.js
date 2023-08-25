import AddBook from './AddBook';
import BooksList from './BooksList';

const BooksPage = () => (
  <div className="books-page">
    <BooksList />
    <hr />
    <AddBook />
  </div>
);

export default BooksPage;
