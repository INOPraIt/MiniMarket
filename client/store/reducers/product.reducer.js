import { handleActions } from 'redux-actions';

import { getAllProductsAsync, getProductByIdAsync } from '../actions/product.action';

const initialState = {
  state: [],
  language: 'ru',
  error: null,
  dataByIdProduct: null,
};

export default handleActions(
  {
    [getAllProductsAsync.success]: (s, { payload: { data: requestData } } = {}) => ({
      ...s,
      state: requestData && !requestData.message ? requestData : [],
      error:
        requestData && requestData.message
          ? requestData.message
          : null
    }),

    [getProductByIdAsync.success]: (s, {payload: {data: requestData}} = {}) => ({
      ...s,
      dataByIdProduct: requestData && !requestData.message ? requestData : {},
      error:
      requestData && requestData.message
        ? requestData.message
        : null
    })
  },
  initialState
);
