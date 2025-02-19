import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';

export default () =>
  combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer
  });
