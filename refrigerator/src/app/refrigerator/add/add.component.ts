import { RefrigeratorActions } from './../refrigerator.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IRefrigerator, Refrigerator } from '../refrigerator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RefrigeratorService } from '../refrigerator.service';
import { AppState } from '../../app.state.class';

@Component({
    selector: 'app-add-refrigerator',
    templateUrl: './add.component.html',
    styleUrls: [ './add.component.sass' ]
})
export class AddRefrigeratorComponent implements OnInit {
    fGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private $store: Store<AppState>
    ) {}

    ngOnInit() {
        this.fGroup = this.fb.group({
            name: ['', Validators.required]
        });
    }

    addRefrigerator(ref: IRefrigerator) {
      const newRefrigerator = new Refrigerator(ref.id, ref.name, ref.products, ref.archivedProducts);
      this.$store.dispatch({ type: RefrigeratorActions.ADD_REFRIGERATOR, payload: newRefrigerator });
      this.fGroup.reset();
    }
}
