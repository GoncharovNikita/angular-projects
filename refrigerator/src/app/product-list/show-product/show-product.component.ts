import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct, Product } from '../product';

@Component({
    selector: 'app-show-product',
    templateUrl: './show-product.component.html'
})
export class ShowProductComponent implements OnInit {
    product: IProduct;
    active = false;
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.product.subscribe({
            next: (product: IProduct) => {
                if (this.product === product) {
                    this.product = undefined;
                    this.active = false;
                } else {
                    this.product = product;
                    this.active = true;
                }
            }
        });
    }
}