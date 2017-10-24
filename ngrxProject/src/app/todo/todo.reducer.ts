import { TodoActions, TodoAction } from './todo.actions';
import { Todo } from './todo.class';
import { Action } from '@ngrx/store';

export function todoReducer (state: Todo[] = [], action: TodoAction) {
    switch (action.type) {
        case TodoActions.FETCHING_TODOS_SUCCESS:
            return [...state, ...action.payload];
        default: return state;
    }
}
