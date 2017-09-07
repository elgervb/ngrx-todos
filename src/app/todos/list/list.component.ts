import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <app-list-item [todo]="todo" (complete)="complete.emit($event)" (delete)="delete.emit($event)"></app-list-item>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style: none;
      padding: 0;
    }
  `]
})
export class ListComponent implements OnInit {

  @Input() todos$: Observable<TodoItem[]>;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
