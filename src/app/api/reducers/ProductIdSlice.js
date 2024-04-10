import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

export const layIdproduct = createAsyncThunk(
  'productId/layProductId',
  async productId => {
    try {
      const response = await AxiosInstance().get(`/products/${productId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
const productidSlice = createSlice({
  name: 'idproduct',
  initialState: {
    productIdData: {},
    productIdStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(layIdproduct.pending, (state, action) => {
        state.productIdStatus = 'loading';
        state.error = null;
      })
      .addCase(layIdproduct.fulfilled, (state, action) => {
        state.productIdStatus = 'succeeded';
        state.productIdData = action.payload;
        state.error = null; 
      })
      .addCase(layIdproduct.rejected, (state, action) => {
        state.productIdStatus = 'failed';
        state.error = action.error.message;
      });
  },
});


export default productidSlice.reducer;
