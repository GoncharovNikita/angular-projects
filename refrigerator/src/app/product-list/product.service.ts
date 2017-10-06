import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProduct, Product } from './product';

@Injectable()
export class ProductService {
    products: Array<IProduct> = new Array();

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
        this.products = result;

        return result;
    }
}
