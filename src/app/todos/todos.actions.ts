import { ActionWithPayload, TodoItem } from './todos.models';
import { actionTypes } from './todos.reducers';

export class TodoAddAction implements ActionWithPayload<TodoItem> {
  type = actionTypes.ADD;

  constructor(public payload: TodoItem) {}
}
