import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct, Product } from './product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [
        './product-list.component.sass'
    ]
})
export class ProductListComponent implements OnInit {
    products: Array<IProduct>;
    addNewProductActive = false;
    newProductName: string;
    newProductCreatedAt: string;
    newProductMovedToRefrigeratorAt: string;
    newProductShelfLife: string;

    toggleAddNewProduct() {
        this.addNewProductActive = !this.addNewProductActive;
    }

    addNewProduct() {
        this.products.push(new Product(
            this.newProductName,
            this.newProductShelfLife,
            this.newProductCreatedAt,
            this.newProductMovedToRefrigeratorAt
        ));
        this.newProductName = '';
        this.newProductCreatedAt = '';
        this.newProductMovedToRefrigeratorAt = '';
        this.newProductShelfLife = '';
    }

    constructor(private productService: ProductService) {}
    async ngOnInit() {
        this.products = this.productService.products;
        this.newProductName = '';
        this.newProductCreatedAt = '';
        this.newProductMovedToRefrigeratorAt = '';
        this.newProductShelfLife = '';
    }
}
