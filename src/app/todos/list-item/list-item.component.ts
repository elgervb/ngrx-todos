import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list-item',
  styleUrls: ['list-item.component.scss'],
  template: `
    <div class="item">
      <i class="status" [class.completed]="todo.completed" (click)="complete.emit(todo)"></i>
      <p class="todo__title">{{todo.todo}}</p>
      <button class="btn__delete" (click)="delete.emit(todo)">&times;</button>
    </div>
  `,
})
export class ListItemComponent implements OnInit {

  @Input() todo: TodoItem;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
