import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { IProduct } from './product';
import {
    AngularFireDatabase,
    AngularFireList
} from 'angularfire2/database';
import { AccountService } from '../accounting/account.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

    private productsFlow: Subject<IProduct> = new Subject();
    private _selectedProduct: IProduct;
    private _productsRef: AngularFireList<IProduct>;
    private subscriptions: Array<Subscription> = new Array();
    products: Subject<Array<IProduct>> = new Subject();
    selectedProduct: Subject<IProduct> = new Subject();

    constructor(private http: Http,
        private afd: AngularFireDatabase,
        private accService: AccountService) {
        this.accService.authState.subscribe(state => {
            if (!state) {
                this.deleteSubscribtions();
            } else {
                if (this.subscriptions.length === 0) {
                    //
                }
            }
        });
    }

    addSubscriptions() {
        this.subscriptions.push(this._productsRef.snapshotChanges()
            .map(val => {
                return(
                    val.map(changes => {
                        return <IProduct>({ key: changes.payload.key, ...changes.payload.val() });
                    })
                );
            })
            .subscribe(val => {
                this.products.next(val);
            }));
        this.subscriptions.push(
            this.selectedProduct
            .subscribe(product => {
                this._selectedProduct = product;
            })
        );
    }

    setProductsPath(key: string) {
        console.log('Key', key);
        this._productsRef = this.afd.list(`refrigerators/${key}/products`);
        this.addSubscriptions();
    }

    deleteSubscribtions() {
        this.subscriptions.map(s => {
            s.unsubscribe();
            this.subscriptions = this.subscriptions.slice(1, this.subscriptions.length);
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
