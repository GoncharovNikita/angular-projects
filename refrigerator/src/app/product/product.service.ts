import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IProduct } from './product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

    private productsFlow: Subject<IProduct> = new Subject();
    private _products: Array<IProduct> = new Array();
    private _selectedProduct: IProduct;
    products: Subject<Array<IProduct>> = new Subject();
    selectedProduct: Subject<IProduct> = new Subject();

    constructor(private http: Http) {
        this.http.get('../../assets/data/data.json')
            .map(res => res.json())
            .subscribe(result => result.forEach(val => this.productsFlow.next(val)));
        this.productsFlow.subscribe(product => {
            const index: number = this._products.indexOf(product);
            if (index === -1) {
                // add to list
                this._products.push(product);
            } else {
                // removing from list
                const preArr = this._products.slice(0, index);
                const postArr = this._products.slice(index + 1, this._products.length);
                this._products = preArr.concat(postArr);
                this.selectedProduct.next(undefined);
            }
            this.products.next(this._products);
        });
        this.selectedProduct
            .subscribe(product => {
                this._selectedProduct = product;
            });
    }

    addProduct(product: IProduct) {
        this.productsFlow.next(product);
    }

    removeProduct(product: IProduct) {
        this.productsFlow.next(product);
    }

    selectProduct(product: IProduct) {
        this.selectedProduct.next(product);
    }
}
