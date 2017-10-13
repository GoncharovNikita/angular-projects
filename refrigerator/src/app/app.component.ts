import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounting/account.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import { User } from 'firebase';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authState: Observable<User>;
  islogged = false;
  constructor(public accService: AccountService,
    private router: Router) {}

  ngOnInit() {
    this.authState = this.accService.authState;
    this.addSubscriptions();
  }

  addSubscriptions() {
    this.accService.isLogged.subscribe(isLogged => {
      this.islogged = isLogged;
      if (!isLogged && this.router.url !== '/login') {
        this.router.navigate(['login']); return;
      }
      if (isLogged && this.router.url === '/login') {
        this.router.navigate(['']); return;
      }
    });
  }

  logout() {
    this.accService.auth.signOut();
  }
}
