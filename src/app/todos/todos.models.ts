import { Action } from '@ngrx/store';

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

export interface TodoState {
  todos: TodoItem[];
}

export interface TodoItem {
  guid: string;
  todo: string;
}
