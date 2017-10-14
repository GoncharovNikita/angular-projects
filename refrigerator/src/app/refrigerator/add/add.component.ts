import { Component, OnInit } from '@angular/core';
import { IRefrigerator, Refrigerator } from '../refrigerator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RefrigeratorService } from '../refrigerator.service';

@Component({
    selector: 'app-add-refrigerator',
    templateUrl: './add.component.html',
    styleUrls: [ './add.component.sass' ]
})
export class AddRefrigeratorComponent implements OnInit {
    private fGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private rs: RefrigeratorService
    ) {}

    ngOnInit() {
        this.fGroup = this.fb.group({
            name: ['', Validators.required]
        });
    }

    addRefrigerator(ref: IRefrigerator) {
        ref.users = new Array();
        this.rs.addRefrigerator(ref);
    }
}
