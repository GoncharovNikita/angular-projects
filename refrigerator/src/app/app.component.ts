import { AccountActions } from './accounting/account.actions';
import { AppState } from './app.state.class';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounting/account.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinct';
import { User } from 'firebase/Auth';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authState: Observable<User>;
  islogged = false;
  constructor(
    public accService: AccountService,
    private router: Router,
    private $store: Store<AppState>
  ) {}

  ngOnInit() {
    this.authState = this.accService.authState;
    this.addSubscriptions();
    this.$store.dispatch({ type: AccountActions.FETCH_SESSION });
  }

  addSubscriptions() {
  }

  logout() {
    this.$store.dispatch({ type: AccountActions.LOGOUT });
  }
}
