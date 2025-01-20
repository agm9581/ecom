import { createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
//Select product state from the store
export const selectProductState = createFeatureSelector<ProductState>('products')
