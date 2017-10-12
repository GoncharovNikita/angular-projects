import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, IProduct } from '../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './list.component.html'
})
export class ProductListComponent implements OnInit {
    selectedProduct: IProduct;
    products: Array<IProduct> = new Array();
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.products
            .subscribe(products => {
                this.products = products;
            });
        this.productService.selectedProduct
            .subscribe(product => {
                this.selectedProduct = product;
            });
    }

    select(product: IProduct) {
        this.productService.selectProduct(product);
    }
}
