import { Store, Action } from '@ngrx/store';
import { AppState } from '../app.state.class';
import { AccountActions } from './account.actions';

export function accountReducer(state: AppState, action: Action) {
    switch (action.type) {
        default: return state;
    }
}
