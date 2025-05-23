import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('PRODUCTS');

export const getAllProducts = factory.create('GET_ALL_PRODUCTS');
export const getAllProductsAsync = factory.createAsync("GET_ALL_PRODUCTS_ASYNC");

export const getProductById = factory.create('GET_PRODUCT_BY_ID');
export const getProductByIdAsync = factory.createAsync('GET_PRODUCT_BY_ID_ASYNC');

export const getProductFilterColorAndMaterial = factory.create('GET_PRODUCT_FILTER_COLOR_AND_MATERIAL');
export const getProductFilterColorAndMaterialAsync = factory.createAsync('GET_PRODUCT_FILTER_COLOR_AND_MATERIAL_ASYNC');