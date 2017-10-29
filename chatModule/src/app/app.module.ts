import { ChatEffects } from './chat/chat.effects';
import { AppRoutesModule } from './app.routes';
import { ChatModule } from './chat/chat.module';
import { userReducer } from './user/user.reducer';
import { AuthModule } from './auth/auth.module';
import { authReducer } from './auth/auth.reducer';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { firebaseSecret } from './../environments/firebase.secret';
import { AngularFireModule } from 'angularfire2';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { LoginModule } from './login/login.module';
import { chatReducer } from './chat/chat.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AuthModule,
    ChatModule,
    LoginModule,
    AppRoutesModule,
    AngularFireModule.initializeApp(firebaseSecret),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.provideStore({
      auth: authReducer,
      user: userReducer,
      chat: chatReducer
    }),
    EffectsModule.run(AuthEffects)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
