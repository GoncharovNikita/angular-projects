export class ChatActions {
  static CONNECT = 'CONNECT';
  static CONNECT_SUCCESS = 'CONNECT_SUCCESS';
  static CONNECT_ERROR = 'CONNECT_ERROR';
  static ADD_MEMBER = 'ADD_MEMBER';
  static ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
  static ADD_MEMBER_ERROR = 'ADD_MEMBER_ERROR';
  static SEND_MESSAGE = 'SEND_MESSAGE';
  static SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
  static SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
}

export class ChatAction {
  type: ChatActions;
  payload?: any;
}
