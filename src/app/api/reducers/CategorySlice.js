import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

export const layCategory = createAsyncThunk('category/layCategory', async () => {
  try {
    const response = await AxiosInstance().get('/allcategory');
    return response; 
  } catch (error) {
    throw error;
  }
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryData: [],
    categoryStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(layCategory.pending, (state, action) => {
        state.categoryStatus = 'loading';
        state.error = null;
      })
      .addCase(layCategory.fulfilled, (state, action) => {
        state.categoryStatus = 'succeeded';
        state.categoryData = action.payload;
      })
      .addCase(layCategory.rejected, (state, action) => {
        state.categoryStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
