import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Effect, Actions } from '@ngrx/effects';
import { AccountActions } from './account.actions';
import { Auth, User } from 'firebase/auth';

@Injectable()
export class AccountingEffects {
  constructor(
    private $accService: AccountService,
    private $action: Actions
  ) {}

  @Effect()
  $authenticate = this.$action
    .ofType(AccountActions.AUTHORIZE)
    .switchMap(() => {
      this.$accService.authenticate();
      return this.$accService.auth
        .switchMap(state => {
          return Observable.of({ type: AccountActions.AUTHORIZE_SUCCESS, payload: state });
        });
    });
}
