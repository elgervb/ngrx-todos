import { ActionWithPayload, TodoItem } from './todos.models';
import { ActionReducer } from '@ngrx/store';

export const actionTypes = {
  ADD: 'Add',
  DELETE: 'Delete',
  COMPLETE: 'Complete'
};

export function todosReducer(state: TodoItem[] = [], action: ActionWithPayload<TodoItem>) {
  switch (action.type) {
    // add the item to the store and sort it
    case actionTypes.ADD:
      return [...state, action.payload].sort((a, b) => a.todo.toLowerCase() < b.todo.toLowerCase() ? -1 : 1);

    // delete the item
    case actionTypes.DELETE:
      return state.filter(item => item.guid !== action.payload.guid);

    // toggle completed
    case actionTypes.COMPLETE:
      return state.map(item => {
        if (item.guid === action.payload.guid) {
          item.completed = !item.completed;
        }
        return item;
      });

    default:
      return state;
  }
}
