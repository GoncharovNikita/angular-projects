import { Refrigerator } from './refrigerator';
import { RefrigeratorActions, RefrigeratorAction } from './refrigerator.actions';

export function refrigeratorsReducer(state: Refrigerator[] = [], action: RefrigeratorAction) {
    console.log(action);
    switch (action.type) {
        case RefrigeratorActions.FETCH_REFRIGERATORS_SUCCESS:
          console.log(action.payload);
          return action.payload ? [...action.payload] : state;
        case RefrigeratorActions.FETCH_REFRIGERATORS_ERROR:
            console.log(action.payload);
            return [];
        case RefrigeratorActions.ADD_REFRIGERATOR_SUCCESS:
          return state;
        case RefrigeratorActions.ADD_REFRIGERATOR_ERROR:
          console.log(action.payload);
          return state;
        default: return state;
    }
}
