import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eWTLKRwVwuyoVtssRIYT/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(POST_URL);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createBook = createAsyncThunk(
  'books/createBook',
  async (bookObj, thunkAPI) => {
    try {
      const resp = await axios.post(POST_URL, bookObj);
      thunkAPI.dispatch(getBooks());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`${POST_URL}/${id}`, JSON.stringify({ item_id: id }));
      thunkAPI.dispatch(getBooks());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const booksArray = [];
        Object.keys(action.payload).forEach((bookID) => {
          action.payload[bookID][0].id = bookID;
          booksArray.push(action.payload[bookID][0]);
        });
        state.books = booksArray;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default booksSlice.reducer;
