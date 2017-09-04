import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of items">
        <app-list-item [item]="todo"></app-list-item>
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() { }

}
