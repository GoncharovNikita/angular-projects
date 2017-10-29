import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'chat'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {

}
