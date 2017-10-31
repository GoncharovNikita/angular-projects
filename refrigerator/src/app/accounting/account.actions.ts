export class AccountActions {
    static AUTHORIZE = 'AUTHORIZE';
    static AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
    static AUTHORIZE_ERROR = 'AUTHORIZE_ERROR';
    static FETCH_SESSION = 'FETCH_SESSION';
    static FETCH_SESSION_SUCCESS = 'FETCH_SESSION_SUCCESS';
    static FETCH_SESSION_ERROR = 'FETCH_SESSION_ERROR';
    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    static LOGOUT_ERROR = 'LOGOUT_ERROR';
}

export class AccountAction {
  type: AccountActions;
  payload?: any;
}
