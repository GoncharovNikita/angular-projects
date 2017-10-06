import { Component } from '@angular/core';
import { IProduct, Product } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: [
        './add-product.component.sass'
    ]
})
export class AddProductComponent {
    name: string;
    createdAt: string;
    shelfLife: string;
    movedToRefrigeratorAt: string;
    isActive = true;

    constructor(private productService: ProductService) {
        this.refresh();
    }

    toggle() { this.isActive = !this.isActive; }

    createProduct() {
        this.productService.products.push(new Product(
            this.name,
            this.shelfLife,
            this.createdAt,
            this.movedToRefrigeratorAt
        ));
        this.refresh();
    }

    refresh() {
        this.name = '';
        this.createdAt = '';
        this.shelfLife = '';
        this.movedToRefrigeratorAt = '';
    }

}
