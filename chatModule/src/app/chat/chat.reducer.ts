import { Chat } from './chat.class';
import { ChatAction, ChatActions } from './chat.actions';
export function chatReducer(state: Chat, action: ChatAction): Chat {
  switch (action.type) {
    case ChatActions.CONNECT_SUCCESS:
      return <Chat>{
        connectionPath: state ? state.connectionPath : '',
        connected: true,
        messages: action.payload.messages ? action.payload.messages : [],
        members: action.payload.members ? action.payload.members : []
      };
    // case ChatActions.SEND_MESSAGE:
    //   return <Chat> {
    //     connectionPath: state ? state.connectionPath : '',
    //     connected: true,
    //     messages: action.payload ? [...state.messages, ...action.payload] : [...state.messages],
    //     members: action.payload.members ? action.payload.members : []
    //   };
    default: return state;
  }
}
