import { Action } from '@ngrx/store';
import { Refrigerator } from '../refrigerator';
import { RefrigeratorActions } from '../refrigerator.actions';
export function selectedRefrigeratorReducer(state: Refrigerator, action: Action) {
  switch (action.type) {
    case RefrigeratorActions.SELECT_REFRIGERATOR:
      return action.payload;
    default: return state;
  }
}
