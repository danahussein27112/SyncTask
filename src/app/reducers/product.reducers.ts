import { createReducer, on } from '@ngrx/store';
import { ProductActions } from '../actions';
import { ProductResource } from '../models/product.resource';

export interface ProductState {
  isLoading: boolean;
  isLoaded: boolean;
  items: Array<ProductResource>;
  errorMessage: string;
  totalResults: number;
}

export const ProductInitialState: ProductState = {
  isLoading: false,
  isLoaded: false,
  items: [],
  errorMessage: '',
  totalResults: 0,
};

export const ProductReducer = createReducer(
  ProductInitialState,
  on(ProductActions.LoadProducts, (state) => ({ ...state, isLoading: true })),
  on(ProductActions.LoadProductById, (state) => ({ ...state, isLoading: true })),
  on(ProductActions.CreateProduct, (state) => ({ ...state, isProcessing: true })),
  on(ProductActions.LoadProductsFailure,
     ProductActions.CreateProductFailure,
    (state, action) => ({
    ...state,
    errorMessage: action.errorMessage,
  })),

  on(ProductActions.LoadProductByIdFailure, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.errorMessage,
    isLoaded: false,
  })),

  on(ProductActions.LoadProductsSuccess, (state, action) => ({
    ...state,
    items: action.Products,
    isLoaded: true,
    isLoading: false,
    totalResults: action.Products.length,
  })),

  on(ProductActions.CreateProductSuccess, (state, action) => {
    const addedProduct = action.Product;
    const Products = Object.assign([], state.items);
    Products.push(addedProduct);
    return {
      ...state,
      items: Products,
      totalResults: Products.length,
    };
  }),
  );
  
