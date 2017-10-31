import { Store, Action } from '@ngrx/store';
import { AppState } from '../app.state.class';
import { AccountActions, AccountAction } from './account.actions';
import { Auth } from 'firebase/auth';
import { User } from './user/user.class';

export function accountReducer(state: User, action: AccountAction) {
    const { payload } = action;
    switch (action.type) {
      case AccountActions.AUTHORIZE_ERROR:
        return undefined;
      case AccountActions.LOGOUT_ERROR:
        return state;
      case AccountActions.FETCH_SESSION_SUCCESS:
        return new User(payload.uid, payload.displayName, payload.photoURL, payload.email);
      case AccountActions.FETCH_SESSION_ERROR:
        return undefined;
      default: return state;
    }
}
