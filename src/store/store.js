import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/products.reducer'
import addNewProductFlowReducer from './reducers/add-new-product-flow.reducer'
import addCommentFlowReducer from './reducers/add-comment-flow.reducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    addNewProductFlow: addNewProductFlowReducer,
    addCommentFlow: addCommentFlowReducer
  },
});
