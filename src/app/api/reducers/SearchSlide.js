import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

export const searchProduct = createAsyncThunk(
  'search/searchProduct',
  async (name, thunkAPI) => {
    try {
      const response = await AxiosInstance().post('/api/get/product', { name });
      return response; // Assuming the response contains the data array
    } catch (error) {
      throw error;
    }
  }
);

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: [],
    searchStatus: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProduct.pending, (state) => {
        state.searchStatus = 'loading';
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.searchStatus = 'succeeded';
        state.searchData = action.payload;
      })
      .addCase(searchProduct.rejected, (state) => {
        state.searchStatus = 'failed';
      });
  },
});

export default SearchSlice.reducer;
