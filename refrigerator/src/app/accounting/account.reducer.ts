import { Store, Action } from '@ngrx/store';
import { AppState } from '../app.state.class';
import { AccountActions, AccountAction } from './account.actions';
import { Auth } from 'firebase/auth';

export function accountReducer(state: Auth, action: AccountAction) {
    switch (action.type) {
      case AccountActions.AUTHORIZE_SUCCESS:
        return action.payload;
      default: return state;
    }
}
