import { Injectable } from '@angular/core';
import { CanActivate, Router, NavigationEnd, GuardsCheckStart } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pairwise';
import { AccountService } from './account.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private $store: Store<AppState>,
    private $authService: AccountService,
    private $router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.$authService.fetchSession()
      .switchMap(user => {
        if (user) {
          return Observable.of(true);
        } else {
          this.$router.navigate(['/login']);
          return Observable.of(false);
        }
      });
  }
}
