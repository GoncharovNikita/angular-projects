import { User } from './../user/user.class';
import { Observable } from 'rxjs/Observable';
import { Auth } from 'firebase/auth';
import { AuthActions } from './../auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state.class';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.sass'
  ]
})
export class HeaderComponent implements OnInit {
  user: Observable<User>;
  logoutTriggered = false;

  constructor(
    private $store: Store<AppState>
  ) {}

  ngOnInit() {
    this.user = this.$store.select('user');
  }

  authClick() {
    this.$store.dispatch({ type: AuthActions.AUTHENTICATE });
  }

  logout() {
    this.$store.dispatch({ type: AuthActions.LOGOUT });
  }

  triggerLogout() {
    this.logoutTriggered = !this.logoutTriggered;
  }
}
