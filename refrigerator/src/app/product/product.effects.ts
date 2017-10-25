import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ProductService } from './product.service';
import { ProductActions, ProductAction } from './product.actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductEffects {
    constructor(
        private productService: ProductService,
        private action$: Actions
    ) {}

    @Effect()
    getProducts$ = this.action$.ofType(ProductActions.FETCH_PRODUCTS)
        .switchMap(() => {
            return this.productService.getProducts()
                .switchMap(products => {
                    return Observable.of({ type: ProductActions.FETCH_PRODUCTS_SUCCESS, payload: products });
                }).catch(err => {
                    return Observable.of(err);
                });
        });
}
