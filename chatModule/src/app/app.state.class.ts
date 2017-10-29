import { Chat } from './chat/chat.class';
import { Message } from './chat/message/message.class';
import { User } from './user/user.class';
import { Auth } from 'firebase/auth';

export class AppState {
  auth: Auth;
  user: User;
  chat: Chat;
}
