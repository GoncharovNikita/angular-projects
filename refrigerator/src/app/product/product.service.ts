import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IProduct } from './product';
import {
    AngularFireDatabase,
    AngularFireList
} from 'angularfire2/database';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

    private productsFlow: Subject<IProduct> = new Subject();
    private _selectedProduct: IProduct;
    private _productsRef: AngularFireList<IProduct>;
    products: Subject<Array<IProduct>> = new Subject();
    selectedProduct: Subject<IProduct> = new Subject();

    constructor(private http: Http,
        private afd: AngularFireDatabase) {
        this._productsRef = this.afd.list('products');
        this.addSubscribtions();
    }

    addSubscribtions() {
        this._productsRef.snapshotChanges()
            .map(val => {
                return(
                    val.map(changes => {
                        return <IProduct>({ key: changes.payload.key, ...changes.payload.val() });
                    })
                );
            })
            .subscribe(val => {
                this.products.next(val);
            });
        this.productsFlow.subscribe(product => {

        });
        this.selectedProduct
            .subscribe(product => {
                this._selectedProduct = product;
            });
    }

    addProduct(product: IProduct) {
        this._productsRef.push(product);
    }

    removeProduct(product: IProduct) {
        this._productsRef.remove(product.key);
        this.selectedProduct.next(undefined);
    }

    selectProduct(product: IProduct) {
        this.selectedProduct.next(product);
    }
}
