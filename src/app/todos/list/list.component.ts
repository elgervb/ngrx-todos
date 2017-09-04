import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <app-list-item [item]="todo"></app-list-item>
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  @Input() todos: TodoItem[];

  constructor() { }

  ngOnInit() { }

}
