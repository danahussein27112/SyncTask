import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductActions } from '../actions';
import { ProductState } from '../reducers';
import { ProductResource } from '../models/product.resource';
import { ProductSelector } from '../selectors/product.selector';
import { ProductPostModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private readonly store: Store<ProductState>) {}

  public get products$(): Observable<ProductResource[]> {
    return this.store.pipe(select(ProductSelector.Products));
  }

  public get errorMessage$(): Observable<string> {
    return this.store.pipe(select(ProductSelector.errorMessage));
  }

  public get isLoading$(): Observable<boolean> {
    return this.store.pipe(select(ProductSelector.isLoading));
  }

  public get isLoaded$(): Observable<boolean> {
    return this.store.pipe(select(ProductSelector.isLoaded));
  }

  public get totalResults$(): Observable<number> {
    return this.store.pipe(select(ProductSelector.totalResults));
  }

  public loadProducts() {
    this.store.dispatch(ProductActions.LoadProducts());
  }

  public loadProductById(productId:number) {
    this.store.dispatch(ProductActions.LoadProductById({id:productId}));
  }

  public createProduct(productModel:ProductPostModel) {
    this.store.dispatch(ProductActions.CreateProduct({Product:productModel}));
  }
}
