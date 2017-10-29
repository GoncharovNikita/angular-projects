import { Message } from './message/message.class';
import { User } from './../user/user.class';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Chat } from './chat.class';
import { AngularFireObject } from 'angularfire2/database';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state.class';

@Injectable()
export class ChatService {
  connection: AngularFireObject<Chat>;
  user: User;
  chat: Chat;
  constructor(
    private $afd: AngularFireDatabase,
    private $store: Store<AppState>
  ) {
    this.$store.select('user')
      .subscribe(user => {
        this.user = <User>user;
      });
  }

  $connect(): Observable<AngularFireObject<Chat>> {
    this.connection = this.$afd.object('chat');
    this.$store.select('chat')
      .map(value => <Chat>value)
      .subscribe(chat => {
        this.chat = chat;
      });
    return this.$afd.object('chat').valueChanges();
  }

  $addMember(member: User) {
    return Observable.fromPromise(
      this.connection.update({ members: this.chat.members ? [...this.chat.members, member] : [member] })
    );
  }

  $sendMessage(message: Message) {
    return Observable.fromPromise(
      this.connection.update({ messages: this.chat.messages ? [message, ...this.chat.messages] : [message] })
    );
  }
}
