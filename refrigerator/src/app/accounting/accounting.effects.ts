import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Effect, Actions } from '@ngrx/effects';
import { AccountActions, AccountAction } from './account.actions';
import { Auth, User } from 'firebase/auth';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountingEffects {
  constructor(
    private $accService: AccountService,
    private $action: Actions
  ) {}

  @Effect()
  $authorize = this.$action
    .ofType(AccountActions.AUTHORIZE)
    .switchMap(() => {
      return this.$accService.authenticate()
        .switchMap(result => {
          return Observable.of({ type: AccountActions.AUTHORIZE_SUCCESS, payload: result });
        }).catch(err => {
          return Observable.of({ type: AccountActions.AUTHORIZE_ERROR });
        });
    });

  @Effect()
  $logout = this.$action.ofType(AccountActions.LOGOUT)
    .switchMap(() => {
      return this.$accService.logout()
        .switchMap(result => {
          return Observable.of({ type: AccountActions.LOGOUT_SUCCESS });
        }).catch(err => {
          return Observable.of({ type: AccountActions.LOGOUT_ERROR });
        });
    });

  @Effect()
  $fetchSession = this.$action.ofType(AccountActions.FETCH_SESSION)
    .switchMap(() => {
      return this.$accService.fetchSession()
        .switchMap(result => {
          if (result === null || result === undefined) {
            return Observable.of({ type: AccountActions.FETCH_SESSION_ERROR });
          } else {
            return Observable.of({ type: AccountActions.FETCH_SESSION_SUCCESS, payload: result });
          }
        });
    });
}
