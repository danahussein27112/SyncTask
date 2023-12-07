import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState} from '../reducers/product.reducers'
export const selectProductState = createFeatureSelector<ProductState>('product');
export class ProductSelector {
    static readonly Products = createSelector(
        selectProductState,
        (state: ProductState) => state.items
      );
      static readonly isLoading = createSelector(
        selectProductState,
        (state: ProductState) => state.isLoading
      );
      static readonly errorMessage = createSelector(
        selectProductState,
        (state: ProductState) => state.errorMessage
      );
      static readonly isLoaded = createSelector(
        selectProductState,
        (state: ProductState) => state.isLoaded
      );
      static readonly totalResults = createSelector(
        selectProductState,
        (state: ProductState) => state.totalResults
      );
    }