import { createSlice } from '@reduxjs/toolkit';

const booksData = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

function getInitialBooks() {
  // getting stored books from local storage
  const temp = localStorage.getItem('books');
  const savedBooks = JSON.parse(temp);
  return savedBooks || booksData;
}

const initialState = {
  books: getInitialBooks(),
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      const temp = JSON.stringify(state.books);
      localStorage.setItem('books', temp);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
      const temp = JSON.stringify(state.books);
      localStorage.setItem('books', temp);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
