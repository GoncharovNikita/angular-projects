import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProduct, Product } from './product';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ProductService {
    private _products: Array<IProduct> = new Array();
    product = new Subject();
    set selectedProduct(product: IProduct) {
        this.product.next(product);
    }

    get products() {
        return this._products;
    }

    addProduct(product: IProduct) {
        this._products.push(product);
    }

    removeProduct(product: IProduct) {
        const index = this._products.indexOf(product);
        const length = this._products.length;
        if (index === -1) { throw new Error('No such product'); }
        const preArr = this._products.slice(0, index);
        const postArr = this._products.slice(index + 1, length);
        console.log(preArr, postArr, index);
        this._products = preArr.concat(postArr);
        console.log(this._products);
    }

    constructor(private http: Http) {
        console.log('Product service constructed');
        this.getProducts();
    }


    async getProducts(): Promise<Array<IProduct>> {
        const result: Array<IProduct> = new Array();
        this.http.get('../../assets/data/data.json')
            .subscribe(data => {
                const products = data.json() as Array<IProduct>;
                for (const product of products) {
                    const __prod = new Product(
                        product.name,
                        product.shelfLife,
                        product.createdAt,
                        product.movedToRefrigeratorAt
                    );
                    result.push(__prod);
                }
            });
        this._products = result;

        return result;
    }
}
