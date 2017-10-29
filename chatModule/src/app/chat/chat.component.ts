import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Chat } from './chat.class';
import { AppState } from './../app.state.class';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ChatActions } from './chat.actions';
import { User } from '../user/user.class';
import { Message } from './message/message.class';
import { FormControl } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat.component.html',
  styleUrls: [
    './chat.component.sass'
  ]
})
export class ChatComponent implements OnInit, AfterViewChecked {
  chat: Observable<Chat>;
  user: User;
  messageText: FormControl;
  private subscriptions: Array<Subscription> = new Array();
  @ViewChild('messagesContainer')
  private messagesListRef: ElementRef;

  constructor(
    private $store: Store<AppState>
  ) {}

  ngAfterViewChecked() {
    try {
        this.messagesListRef.nativeElement.scrollTop = this.messagesListRef.nativeElement.scrollHeight;
    } catch (err) {
      //
    }
  }

  ngOnInit() {
    this.chat = this.$store.select('chat');
    this.$store.select('user')
      .map(user => <User>user)
      .subscribe(user => {
        if (!user) { return; }
        user = new User(user.displayName, user.email, user.photoURL, user.uid);
        this.user = user;
        return this.$store.select('chat')
          .map(value => <Chat>value)
          .filter(chat => chat !== undefined)
          .subscribe(chat => {
            if (!chat.members.some(_ => _.uid === user.uid)) {
              this.$store.dispatch({
                type: ChatActions.ADD_MEMBER,
                payload: user
              });
            }
          });
      });

    this.messageText = new FormControl();
  }

  sendMessage() {
    this.$store.dispatch({
      type: ChatActions.SEND_MESSAGE,
      payload: new Message(this.user, this.messageText.value, false)
    });
    this.messageText.reset();
  }
}
