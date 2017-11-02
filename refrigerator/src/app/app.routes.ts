import { LoginGuard } from './accounting/login/login.guard';
import { AuthGuard } from './accounting/auth.guard';
import { RefrigeratorsComponent } from './refrigerator/refrigerators.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './accounting/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'r',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {
            path: 'refrigerators',
            component: RefrigeratorsComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/r/refrigerators'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    LoginGuard
  ]
})
export class AppRoutesModule {}
