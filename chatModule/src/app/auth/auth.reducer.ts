import { Auth } from 'firebase/auth';
import { AuthAction, AuthActions } from './auth.actions';

export function authReducer (state: Auth, action: AuthAction) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS: return action.payload;
    case AuthActions.LOGOUT_SUCCESS: return undefined;
    case AuthActions.FETCH_SESSION_SUCCESS: return action.payload;
    case AuthActions.FETCH_SESSION_ERROR: return undefined;
    default: return state;
  }
}
