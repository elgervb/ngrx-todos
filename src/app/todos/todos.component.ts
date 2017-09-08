import { Observable } from 'rxjs/Rx';
import { TodoAddAction, TodoCompleteAction, TodoDeleteAction } from './todos.actions';
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
      <app-list
        [todos$]="todos$"
        (complete)="completeTodo($event)"
        (delete)="deleteTodo($event)"
        (showDetails)="showDetails($event)"></app-list>
    </main>
    <footer>
      <p>Currently: {{(todos$ |async)?.length}} active todos</p>
    </footer>
    <app-flyout [(show)]="showFlyout" >
      <app-item-details *ngIf="selectedItem" [todo]="selectedItem"></app-item-details>
    </app-flyout>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    main {
      flex: 2;
      overflow-y: auto;
    }
    header, footer {
      padding: 1rem 0;
    }
  `]
})
export class TodosComponent implements OnInit {

  todos$: Observable<TodoItem[]>;

  showFlyout = false;
  selectedItem: TodoItem;

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

  completeTodo(todo: TodoItem): void {
    this.store.dispatch(new TodoCompleteAction(todo));
  }

  deleteTodo(todo: TodoItem): void {
    this.store.dispatch(new TodoDeleteAction(todo));
  }

  showDetails(todo: TodoItem): void {
    this.showFlyout = true;
    this.selectedItem = todo;
  }

}
