import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state.class';
import { AuthActions } from './auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private $store: Store<AppState>,
    private $router: Router
  ) {}

  ngOnInit() {
    this.$store.dispatch({ type: AuthActions.FETCH_SESSION });
    this.$store.select('user')
      .subscribe(user => {
        if (user === null || user === undefined) {
          this.$router.navigate(['login']);
        }
      });
  }
}
