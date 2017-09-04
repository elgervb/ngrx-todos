import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list-item',
  template: `
    <div>
      {{item.todo}} <button (click)="delete.emit(item)">x</button>
    </div>
  `,
  styles: []
})
export class ListItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
