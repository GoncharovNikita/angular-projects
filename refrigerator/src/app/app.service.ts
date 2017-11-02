import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from './accounting/account.service';
@Injectable()
export class AppService {
  constructor(
    private $accService: AccountService,
    private $router: Router
  ) {}

  watchForLoginConponent() {
    return this.$accService.fetchSession()
      .subscribe(user => {
        if (!user) {
          console.log('pre navigate');
          this.$router.navigate(['/login']);
        } else {
          const { url } = this.$router.routerState.snapshot;
          switch (url) {
            case '/login':
              this.$router.navigate(['/']);
              break;
          }
        }
      });
  }
}
