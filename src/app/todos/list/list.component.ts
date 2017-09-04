import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of items">
        <app-list-item [item]="todo" (delete)="delete.emit($event)"></app-list-item>
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  @Input() items: TodoItem[];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
