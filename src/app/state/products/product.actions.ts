import { createAction, props } from '@ngrx/store';

//load products
export const loadProducts = createAction('[Product] Load Products');

//load products successfully after api call
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: any[] }>()
);

//load products failure
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);

//add a product
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: any }>()
);
