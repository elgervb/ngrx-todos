import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <app-list-item
          [todo]="todo"
          (complete)="complete.emit($event)"
          (delete)="delete.emit($event)"
          (showDetails)="showDetails.emit($event)"></app-list-item>
      </li>
    </ul>
  `,
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() todos$: Observable<TodoItem[]>;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();
  @Output() showDetails = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
