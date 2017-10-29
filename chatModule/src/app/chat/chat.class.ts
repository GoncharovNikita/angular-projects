import { User } from '../user/user.class';
import { Message } from './message/message.class';
export class Chat {
  connectionPath: string;
  connected: boolean;
  members: Array<User>;
  messages: Array<Message>;
}
