import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, IProduct } from '../product';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-product-list',
    templateUrl: './list.component.html'
})
export class ProductListComponent implements OnInit {
    selectedProduct: IProduct;
    products: Observable<Array<IProduct>>;
    isProductsListEmpty = true;
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = this.productService.products;
        this.productService.selectedProduct
            .subscribe(product => {
                this.selectedProduct = product;
            });
        this.productService.products
        .subscribe(products => {
            this.isProductsListEmpty = products.length === 0;
        });
    }

    select(product: IProduct) {
        this.productService.selectProduct(product);
    }
}
