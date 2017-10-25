import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { RefrigeratorService } from './refrigerator.service';
import { RefrigeratorActions } from './refrigerator.actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class RefrigeratorEffects {
    constructor(
        private refService: RefrigeratorService,
        private action$: Actions
    ) {}

    @Effect()
    fetchRefrigerators$ = this.action$
        .ofType(RefrigeratorActions.FETCH_REFRIGERATORS)
        .switchMap(() => {
            return this.refService.refrigerators.asObservable()
                .switchMap(refrigerators => {
                    return Observable.of({ type: RefrigeratorActions.FETCH_REFRIGERATORS_SUCCESS, payload: refrigerators });
                }).catch(err => {
                    return Observable.of({ type: RefrigeratorActions.FETCH_REFRIGERATORS_ERROR, payload: err });
                });
        });
}
