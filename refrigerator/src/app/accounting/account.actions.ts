export class AccountActions {
    static AUTHORIZE = 'AUTHORIZE';
    static AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
    static AUTHORIZE_ERROR = 'AUTHORIZE_ERROR';
    static UNAUTHORIZE = 'UNAUTHORIZE';
}

export class AccountAction {
  type: AccountActions;
  payload?: any;
}
