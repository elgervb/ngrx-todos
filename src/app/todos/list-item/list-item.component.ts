import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list-item',
  template: `
    <div>
      {{item.todo}}
    </div>
  `,
  styles: []
})
export class ListItemComponent implements OnInit {

  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
