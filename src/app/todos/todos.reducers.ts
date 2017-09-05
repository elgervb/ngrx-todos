import { ActionWithPayload, TodoItem } from './todos.models';
import { ActionReducer } from '@ngrx/store';

export const actionTypes = {
  ADD: 'Add',
  DELETE: 'Delete'
};

export function todosReducer(state: TodoItem[] = [], action: ActionWithPayload<TodoItem>) {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];

    case actionTypes.DELETE:
      return state.filter(item => item.guid !== action.payload.guid);

    default:
      return state;
  }
};
