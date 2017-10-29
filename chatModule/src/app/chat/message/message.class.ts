import { User } from '../../user/user.class';
export class Message {
  author: User;
  text: string;
  isDelivered: boolean;
  constructor(author: User, text: string, isDelivered: boolean) {
    this.author = author;
    this.text = text;
    this.isDelivered = isDelivered;
  }
}
