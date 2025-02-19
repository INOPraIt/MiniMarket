import { take, takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import {
  getAllProducts,
  getAllProductsAsync,
  getProductByIdAsync,
  getProductById,
  getProductFilterColorAndMaterial,
  getProductFilterColorAndMaterialAsync
} from '../actions/product.action';
import ProductApi from '../../services/api/product';

export function* productSaga() {
  yield takeEvery(getAllProducts, bindAsyncActions(getAllProductsAsync)(ProductApi.getAllProduct));
  yield takeEvery(getProductById, bindAsyncActions(getProductByIdAsync)(ProductApi.getProductById));
  yield takeEvery(getProductFilterColorAndMaterial, bindAsyncActions(getProductFilterColorAndMaterialAsync)(ProductApi.getFiltersProduct));
}
