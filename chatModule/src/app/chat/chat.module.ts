import { ChatActions } from './chat.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state.class';
import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { EffectsModule } from '@ngrx/effects';
import { ChatEffects } from './chat.effects';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.run(ChatEffects)
  ],
  declarations: [
    ChatComponent
  ],
  exports: [
    ChatComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule {
  constructor(
    private $store: Store<AppState>
  ) {
    this.$store.dispatch({ type: ChatActions.CONNECT });
  }
}
