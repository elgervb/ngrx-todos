import { TodoItem } from './todos.models';
import { Injectable } from '@angular/core';

const KEY = 'TODOSSERVICE';

@Injectable()
export class TodosService {

  constructor() { }

  add(item: TodoItem): void {
    const todos = this.todos();
    todos.push(item);
    todos.sort( (a, b) => a.todo < b.todo ? -1 : 1);

    this.save(todos);
  }

  delete(item: TodoItem): void {
    const todos = this.todos().filter(value => value.guid !== item.guid);
    this.save(todos);
  }

  guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      /* tslint:disable no-bitwise */
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      /* tslint:enable no-bitwise */
      return v.toString(16);
    });
  }

  todos(): TodoItem[] {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  }

  private save(items: TodoItem[]): void {
    localStorage.setItem(KEY, JSON.stringify(items));
  }

}
