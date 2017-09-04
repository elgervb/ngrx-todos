import { TodoItem } from './todos.models';
import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <app-item-form (itemAdded)="addTodo($event)"></app-item-form>
    <app-list [items]="todos" (delete)="deleteTodo($event)"></app-list>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  todos: TodoItem[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todos = this.todosService.todos();
  }

  addTodo(todo: string): void {
    this.todosService.add({
      guid: this.todosService.guid(),
      todo
    });
  }

  deleteTodo(todo: TodoItem): void {
    this.todosService.delete(todo);
  }

}
