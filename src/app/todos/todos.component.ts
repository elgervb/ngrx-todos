import { Observable } from 'rxjs/Rx';
import { TodoAddAction, TodoDeleteAction } from './todos.actions';
import { TodoItem, TodoState } from './todos.models';
import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos',
  template: `
    <header>
      <app-item-form (itemAdded)="addTodo($event)"></app-item-form>
    </header>
    <main>
      <app-list [todos$]="todos$" (delete)="deleteTodo($event)"></app-list>
    </main>
    <footer>
      Currently: {{(todos$ |async)?.length}} active todos
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    main {
      flex: 2;
      overflow-y: scroll;
    }
    header, footer {
      padding: 1rem 0;
    }
  `]
})
export class TodosComponent implements OnInit {

  todos$: Observable<TodoItem[]>;

  constructor(private todosService: TodosService, private store: Store<TodoState>) { }

  ngOnInit() {
    this.todos$ = this.store.select(state => state.todos);
  }

  addTodo(todo: string): void {
    this.store.dispatch(new TodoAddAction({
      guid: this.todosService.guid(),
      todo
    }));
  }

  deleteTodo(todo: TodoItem): void {
    this.store.dispatch(new TodoDeleteAction(todo));
  }

}
