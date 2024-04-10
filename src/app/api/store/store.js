import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from '../reducers/CategorySlice';
import productsReducer from '../reducers/ProductSlice';
import idProductReducer from '../reducers/ProductIdSlice';
import cartReducer from '../reducers/CartSlice';
import searchReducer from '../reducers/SearchSlide';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
    idproduct: idProductReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
