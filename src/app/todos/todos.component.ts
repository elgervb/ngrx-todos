import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { TodoAddAction, TodoCompleteAction, TodoDeleteAction, TodoGetAction } from './todos.actions';
import { TodoFilter, TodoItem, TodoState } from './todos.models';
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
      <p>
        Currently: {{(todos$ |async)?.length}} todos. Show:
      </p>

      <ul>
        <li>
          <input type="radio" name="filter" id="showAll" #showAll checked (change)="changeFilter({all: showAll.checked})">
          <label for="showAll">all</label>
        </li>
        <li>
          <input type="radio" name="filter" id="showActive" #showActive (change)="changeFilter({completed: !showActive.checked})">
          <label for="showActive">active</label>
        </li>
        <li>
          <input type="radio" name="filter" id="showCompleted" #showCompleted (change)="changeFilter({completed: showCompleted.checked})">
          <label for="showCompleted">completed</label>
        </li>
      </ul>

    </footer>
    <app-flyout [(show)]="showFlyout" >
      <app-item-details *ngIf="selectedItem" ngModel [todo]="selectedItem"></app-item-details>
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
      align-items: center;
      display: flex;
      padding: 1rem 0;
    }
    footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    footer p{
      margin: 0;
    }
  `]
})
export class TodosComponent implements OnInit {

  showFlyout = false;
  selectedItem: TodoItem;
  private filter = new BehaviorSubject<TodoFilter>({completed: false});
  private _todos$: Observable<TodoItem[]>;

  constructor(private todosService: TodosService, private store: Store<TodoState>) { }

  ngOnInit() {
    this.store.dispatch(new TodoGetAction());
    this._todos$ = this.store.select(state => state.todos);
  }

  addTodo(todo: string): void {
    this.store.dispatch(new TodoAddAction({
      guid: this.todosService.guid(),
      todo,
      completed: false
    }));
  }

  changeFilter(filter: TodoFilter): void {
    this.filter.next(filter);
  }

  completeTodo(todo: TodoItem): void {
    this.store.dispatch(new TodoCompleteAction(todo));
  }

  deleteTodo(todo: TodoItem): void {
    this.store.dispatch(new TodoDeleteAction(todo));
  }

  get todos$(): Observable<TodoItem[]> {
    return Observable.combineLatest(this._todos$, this.filter,
      (todos, filter) => todos.filter(item => filter.all || item.completed === filter.completed)
    );
  }

  showDetails(todo: TodoItem): void {
    this.showFlyout = true;
    this.selectedItem = todo;
  }

}
