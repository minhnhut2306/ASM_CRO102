import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from '../reducers/CategorySlice';
import productsReducer from '../reducers/ProductSlice';
import idProductReducer from '../reducers/ProductIdSlice';
import CartReducer from '../reducers/CartSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
    idproduct: idProductReducer,
    cart: CartReducer,
  },
});

export default store;
