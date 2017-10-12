import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-select-product',
    templateUrl: './select.component.html',
    styleUrls: [
        './select.component.sass'
    ]
})
export class SelectProductComponent implements OnInit {
    product: IProduct;
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.selectedProduct
            .subscribe(product => {
                this.product = product;
            });
    }

    remove(product: IProduct) {
        this.productService.removeProduct(product);
    }
}
