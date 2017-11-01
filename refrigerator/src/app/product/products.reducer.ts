import { RefrigeratorActions } from './../refrigerator/refrigerator.actions';
import { Action, ActionReducer } from '@ngrx/store';
import { Product } from './product';
import { ProductActions, ProductAction } from './product.actions';

export function productsReducer(products: Array<Product> = [], action: Action) {
    switch (action.type) {
        case ProductActions.ADD_PRODUCT:
            return [...products, action.payload];
        case ProductActions.REMOVE_PRODUCT:
            return products.filter(p => p.key !== action.payload.key);
        case ProductActions.FETCH_PRODUCTS_SUCCESS:
            return [...products, ...action.payload];
        case RefrigeratorActions.SELECT_REFRIGERATOR:
          return action.payload.products;
        default: return products;
    }
}
