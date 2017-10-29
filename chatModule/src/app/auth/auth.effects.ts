import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthEffects {
  constructor(
    private $as: AuthService,
    private $action: Actions
  ) {}

  @Effect()
  $authenticate = this.$action
    .ofType(AuthActions.AUTHENTICATE)
    .switchMap(() => {
      return this.$as.$authenticate().switchMap(result => {
        return Observable.of({ type: AuthActions.AUTHENTICATE_SUCCESS, payload: result });
      }).catch(error => {
        return Observable.of({ type: AuthActions.AUTHENTICATE_ERROR, payload: error });
      });
    });

  @Effect()
  $fetchSession = this.$action
    .ofType(AuthActions.FETCH_SESSION)
    .switchMap(() => {
      return this.$as.$fetchSession().switchMap(result => {
          return Observable.of({ type: AuthActions.FETCH_SESSION_SUCCESS, payload: result });
      }).catch(error => {
        return Observable.of({ type: AuthActions.FETCH_SESSION_ERROR });
      });
    });

  @Effect()
  $logout = this.$action.ofType(AuthActions.LOGOUT)
    .switchMap(() => {
      return this.$as.$logout().switchMap(result => {
        return Observable.of({ type: AuthActions.LOGOUT_SUCCESS });
      }).catch(err => {
        return Observable.of({ type: AuthActions.LOGOUT_ERROR });
      });
    });
}
