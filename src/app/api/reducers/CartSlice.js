import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  cart: [],
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const index = state.cart.findIndex(
        item => item._id.toString() === action.payload._id.toString(),
      );
      if (index >= 0) {
        state.cart[index].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    addItemPayment: (state, action) => {
      const { _id, quantity, total } = action.payload;
      const existingItemIndex = state.cart.findIndex(item => item._id === _id);
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    
    
    
    changeQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const index = state.cart.findIndex(item => item._id === productId);
      if (index !== -1) {
        state.cart[index].quantity = newQuantity;
      }
    },

    clearCart: (state, action) => {
      state.cart = [];
    },
    

    removeItemFromCart: (state, action) => {
      const productId = action.payload.productId;
      state.cart = state.cart.filter(item => item._id !== productId);
    }, 
    login: (state, action) => {
      state.user = action.payload; 
    },

    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {
  addItemToCart,
  logout,
  changeQuantity,
  removeItemFromCart,
  login,
  addItemPayment,
  clearCart,
} = appSlice.actions;
export default appSlice.reducer;
