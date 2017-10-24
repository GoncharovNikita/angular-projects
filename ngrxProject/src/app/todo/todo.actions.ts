export class TodoActions {
    static FETCHING_TODOS = 'FETCHING_TODOS';
    static FETCHING_TODOS_SUCCESS = 'FETCHING_TODOS_SUCCESS';
}

export class TodoAction {
    type: string;
    payload?: any;
}
