import { Refrigerator } from './refrigerator';
import { RefrigeratorActions, RefrigeratorAction } from './refrigerator.actions';

export function refrigeratorsReducer(state: Refrigerator[] = [], action: RefrigeratorAction) {
    switch (action.type) {
        case RefrigeratorActions.FETCH_REFRIGERATORS_SUCCESS:
            return [...state, ...action.payload];
        case RefrigeratorActions.FETCH_REFRIGERATORS_ERROR:
            console.log(action.payload);
            return state;
        default: return state;
    }
}
