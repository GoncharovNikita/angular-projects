import { Router } from '@angular/router';
import { AppState } from './../app.state.class';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.sass'
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array();

  constructor(
    private $store: Store<AppState>,
    private $router: Router
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.$store.select('user')
        .subscribe(user => {
          if (user !== null && user !== undefined) {
            this.$router.navigate(['chat']);
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.map(_ => _.unsubscribe());
  }
}
