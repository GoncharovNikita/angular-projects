import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, IProduct } from '../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './list.component.html'
})
export class ProductListComponent implements OnInit {

    products: Array<IProduct> = new Array();
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.products
            .subscribe(products => {
                this.products = products;
            });
    }
}
