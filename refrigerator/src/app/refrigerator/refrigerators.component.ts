import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IRefrigerator, Refrigerator } from './refrigerator';
import { RefrigeratorService } from './refrigerator.service';
import { AppState } from '../app.state.class';

@Component({
    selector: 'app-refrigerators',
    templateUrl: './refrigerators.component.html',
    styleUrls: [
        './refrigerators.component.sass'
    ]
})
export class RefrigeratorsComponent implements OnInit {
    constructor(
            private rs: RefrigeratorService,
            private $store: Store<AppState>
    ) {}

    ngOnInit() {
    }
}
