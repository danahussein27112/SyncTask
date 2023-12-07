import { createAction, props } from "@ngrx/store";
import { ProductPostModel } from "../models/product.model";
import { ProductResource } from "../models/product.resource";

export const enum ProductActionNames {
    LOAD_PRODUCTS = '[Load all Products]',
    LOAD_PRODUCTS_SUCCESS = '[Load all Products success]',
    LOAD_PRODUCTS_FAILURE = '[Load all Products failure]',
    LOAD_PRODUCT_BY_ID = '[Load Product by id]',
    LOAD_PRODUCT_BY_ID_SUCCESS = '[Load Product by id success]',
    LOAD_PRODUCT_BY_ID_FAILURE = '[Load Product by id failure]',
    ADD_PRODUCT= '[Add Product]',
    ADD_PRODUCT_SUCCESS = '[Add Product success]',
    ADD_PRODUCT_FAILURE = '[Add Product  failure]',
}
export const LoadProducts = createAction(ProductActionNames.LOAD_PRODUCTS);

export const LoadProductsSuccess = createAction(
  ProductActionNames.LOAD_PRODUCTS_SUCCESS,
  props<{ Products: ProductResource[] }>()
);

export const LoadProductsFailure = createAction(
  ProductActionNames.LOAD_PRODUCT_BY_ID_FAILURE,
  props<{ errorMessage: string }>()
);

export const LoadProductById = createAction(
  ProductActionNames.LOAD_PRODUCT_BY_ID,
  props<{ id: number }>()
);

export const LoadProductByIdSuccess = createAction(
  ProductActionNames.LOAD_PRODUCTS_SUCCESS,
  props<{ Product: ProductResource }>()
);

export const LoadProductByIdFailure = createAction(
  ProductActionNames.LOAD_PRODUCT_BY_ID_FAILURE,
  props<{ errorMessage: string }>()
);

export const CreateProduct = createAction(
  ProductActionNames.ADD_PRODUCT,
  props<{
    Product: ProductPostModel;
  }>()
);

export const CreateProductSuccess = createAction(
  ProductActionNames.ADD_PRODUCT_SUCCESS,
  props<{
    Product: ProductResource;
  }>()
);

export const CreateProductFailure = createAction(
  ProductActionNames.ADD_PRODUCT_FAILURE,
  props<{ errorMessage: string }>()
);
