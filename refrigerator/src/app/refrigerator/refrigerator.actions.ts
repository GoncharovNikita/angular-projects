export class RefrigeratorActions {
    static FETCH_REFRIGERATORS = 'FETCH_REFRIGERATOS';
    static FETCH_REFRIGERATORS_SUCCESS = 'FETCH_REFRIGERATORS_SUCCESS';
    static FETCH_REFRIGERATORS_ERROR = 'FETCH_REFRIGERATORS_ERROR';
}
export class RefrigeratorAction {
    type: RefrigeratorActions;
    payload?: any;
}
