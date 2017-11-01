import { Injectable } from '@angular/core';
import { CanActivate, Router, NavigationEnd, GuardsCheckStart } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pairwise';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private $store: Store<AppState>,
    private $router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.$store.select('user')
      .switchMap(user => {
        if (user) {
          return Observable.of(true);
        } else {
          return Observable.of(false);
        }
      });
  }
}
