import { handleActions } from 'redux-actions';

import { addProductToCart, deleteProductToCart } from '../actions/cart.action';

const initialState = {
  cart: [],
  error: null,
};

export default handleActions(
  {
    [addProductToCart]: (s, { payload: { product } } = {}) => ({
      ...s,
      cart: [...s.cart, product],
    }),

    [deleteProductToCart]: (s, { payload: { productId } } = {}) => ({
      ...s,
      cart: s.cart.filter(item => item._id !== productId),
    }),
  },
  initialState
);
