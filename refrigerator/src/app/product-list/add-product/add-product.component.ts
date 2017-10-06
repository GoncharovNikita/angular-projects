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
    isActive = false;
    isNameValid      = true;
    isCreatedAtValid = true;
    isShelfLifeValid = true;
    isMovedValid     = true;
    timeout

    constructor(private productService: ProductService) {
        this.refresh();
    }

    validate() {
        this.isNameValid = this.name.length >= 3
        this.isCreatedAtValid = this.createdAt.length >= 5
        this.isShelfLifeValid = this.shelfLife.length >= 5
        this.isMovedValid = this.movedToRefrigeratorAt.length >= 5
    }

    get isAllValid(): boolean {
        if (this.isNameValid 
            && this.isCreatedAtValid
            && this.isShelfLifeValid
            && this.isMovedValid) return true 
        return false 
    }

    toggle() { this.isActive = !this.isActive; }

    createProduct() {
        if (this.timeout) clearTimeout(this.timeout)
        this.validate()
        if (this.isAllValid) {
            this.productService.products.push(new Product(
                this.name,
                this.shelfLife,
                this.createdAt,
                this.movedToRefrigeratorAt
            ));
            this.refresh();
        } else {
            this.timeout = setTimeout(() => {
                this.isNameValid = true;
                this.isCreatedAtValid = true;
                this.isMovedValid = true;
                this.isShelfLifeValid = true;
            }, 3000)
        }
        
    }

    // calls by default
    refresh() {
        this.name = '';
        this.createdAt = '';
        this.shelfLife = '';
        this.movedToRefrigeratorAt = '';
        this.isActive = false;
    }

}