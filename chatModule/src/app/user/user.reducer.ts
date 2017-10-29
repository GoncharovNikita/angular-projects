import { AuthAction, AuthActions } from './../auth/auth.actions';
import { User } from './user.class';
export function userReducer (state: User, action: AuthAction) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      return <User>action.payload.user;
    case AuthActions.LOGOUT_SUCCESS:
      return undefined;
    case AuthActions.FETCH_SESSION_SUCCESS:
      return <User>action.payload;
    default: return state;
  }
}
