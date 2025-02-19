import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('CART');

export const addProductToCart = factory.create('ADD_PRODUCT_TO_CART');
export const addProductToCartAsync = factory.createAsync('ADD_PRODUCT_TO_CART_ASYNC');

export const deleteProductToCart = factory.create('DELETE_PRODUCT_TO_CART');
export const deleteProductToCartAsync = factory.createAsync('DELETE_PRODUCT_TO_CART_ASYNC');

