import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoService } from './todo.service';
import { TodoActions } from './todo.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class TodoEffects {
    constructor(
        private action$: Actions,
        private todoService: TodoService
    ) {}

    @Effect()
    getTodos$ = this.action$
        .ofType(TodoActions.FETCHING_TODOS)
        .switchMap(() => {
            return this.todoService
                .getTodos()
                .switchMap(todos => {
                    return Observable.of({ type: TodoActions.FETCHING_TODOS_SUCCESS, payload: todos });
                });
        });
}
