import { Component, OnInit, OnDestroy } from '@angular/core';
import { RefrigeratorService } from '../refrigerator.service';
import { Router } from '@angular/router';
import { AppState } from '../../app.state.class';
import { Store } from '@ngrx/store';
import { Refrigerator } from '../refrigerator';
import { Observable } from 'rxjs/Observable';
import { RefrigeratorActions } from '../refrigerator.actions';

@Component({
    selector: 'app-list-refrigerators',
    templateUrl: './list.component.html',
    styleUrls: [
        './list.component.sass'
    ]
})
export class RefrigeratorsListComponent implements OnInit, OnDestroy {
    private refrigerators: Observable<Array<Refrigerator>>;
    constructor(
        private store: Store<AppState>
    ) {}
    ngOnInit() {
        this.refrigerators = this.store.select('refrigerators');
        this.store.dispatch({ type: RefrigeratorActions.FETCH_REFRIGERATORS });
    }
    ngOnDestroy() {
      this.refrigerators = undefined;
    }
}
