import { Component } from '@angular/core';
import { IProduct, Product } from '../product';
import { ProductService } from '../product.service';
import { AddProductService } from './add-product.service';

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
    timeout;
    expanded = false;
    private _focusedCount = 0;
    set focusedCount (value: number) {
        this._focusedCount = value;
        if (this._focusedCount <= 0) {
            this.expanded = false;
        } else {
            this.expanded = true;
        }
    }
    get focusedCount () {
        return this._focusedCount;
    }

    constructor(private productService: ProductService,
                private addProductService: AddProductService) {
        this.refresh();
    }

    validate() {
        this.isNameValid = this.name.length >= 3;
        this.isCreatedAtValid = this.createdAt.length >= 5;
        this.isShelfLifeValid = this.shelfLife.length >= 5;
        this.isMovedValid = this.movedToRefrigeratorAt.length >= 5;
    }

    get isAllValid(): boolean {
        if (this.isNameValid
            && this.isCreatedAtValid
            && this.isShelfLifeValid
            && this.isMovedValid) { return true; }
        return false;
    }

    toggle() { this.isActive = !this.isActive; }

    createProduct() {
        if (this.timeout) { clearTimeout(this.timeout); }
        this.validate();
        if (this.isAllValid) {
            this.productService.addProduct(new Product(
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
            }, 3000);
        }
    }

    // calls by default
    refresh() {
        this.name = '';
        this.createdAt = '';
        this.shelfLife = '';
        this.movedToRefrigeratorAt = this.getDate();
        this.isActive = false;
    }

    addFocused() {
        this.focusedCount++;
    }

    removeFocused() {
        if (this.focusedCount > 1) {
            this.focusedCount--;
        } else {
            setTimeout(() => {
                this.focusedCount--;
            }, 50);
        }
    }

    getDate(): string {
        const date = new Date();
        const year  = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        if (month.toString().length === 1) { month = '0' + month.toString(); }
        let day = (date.getDate()).toString();
        if (day.toString().length === 1) { day = '0' + day.toString(); }
        const result = `${year}-${month}-${day}`;
        console.log(result);
        return result;
    }

}
