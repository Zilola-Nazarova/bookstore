import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/101/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async(_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// function getInitialBooks() {
//   // getting stored books from local storage
//   const temp = localStorage.getItem('books');
//   const savedBooks = JSON.parse(temp);
//   return savedBooks || booksData;
// }

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
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
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload.results;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message
      })
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
