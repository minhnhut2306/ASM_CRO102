import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

export const layProduct = createAsyncThunk('product/layProduct', async () => {
  try {
    const response = await AxiosInstance().get('/allproducts');
    return response; 
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productData: [],
    productStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(layProduct.pending, (state, action) => {
        state.productStatus = 'loading';
        state.error = null;
      })
      .addCase(layProduct.fulfilled, (state, action) => {
        state.productStatus = 'succeeded';
        state.productData = action.payload;
      })
      .addCase(layProduct.rejected, (state, action) => {
        state.productStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
