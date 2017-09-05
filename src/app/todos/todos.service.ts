import { TodoItem } from './todos.models';
import { Injectable } from '@angular/core';

const KEY = 'TODOSSERVICE';

@Injectable()
export class TodosService {

  constructor() { }

  guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      /* tslint:disable no-bitwise */
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      /* tslint:enable no-bitwise */
      return v.toString(16);
    });
  }

  private save(items: TodoItem[]): void {
    localStorage.setItem(KEY, JSON.stringify(items));
  }

}
