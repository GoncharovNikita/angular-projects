import { User } from './../user/user.class';
import { Chat } from './chat.class';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { ChatActions, ChatAction } from './chat.actions';
@Injectable()
export class ChatEffects {
  constructor(
    private $chatService: ChatService,
    private $action: Actions
  ) {}

  @Effect()
  $connect = this.$action.ofType(ChatActions.CONNECT)
    .switchMap(() => {
      return this.$chatService.$connect()
        .map(result => {
          if (result) {
            return result;
          } else {
            return {};
          }
        })
        .switchMap(result => {
          return Observable.of({ type: ChatActions.CONNECT_SUCCESS, payload: result });
        }).catch(err => {
          return Observable.of({ type: ChatActions.CONNECT_ERROR });
        });
    });

    @Effect()
    $addMember = this.$action.ofType(ChatActions.ADD_MEMBER)
      .map(toPayload)
      .switchMap((payload) => {
        return this.$chatService.$addMember(payload).switchMap(result => {
          return Observable.of({ type: ChatActions.ADD_MEMBER_SUCCESS, payload: result });
        }).catch(err => {
          return Observable.of({ type: ChatActions.ADD_MEMBER_ERROR });
        });
      });

    @Effect()
    $sendMessage = this.$action.ofType(ChatActions.SEND_MESSAGE)
      .map(toPayload)
      .switchMap((payload) => {
        return this.$chatService.$sendMessage(payload).switchMap(result => {
          return Observable.of({ type: ChatActions.SEND_MESSAGE_SUCCESS, payload: result });
        }).catch(error => {
          return Observable.of({ type: ChatActions.SEND_MESSAGE_ERROR, payload: error });
        });
      });
}
