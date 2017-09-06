import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list-item',
  template: `
    <span class="check" [class.completed]="todo.completed" (click)="complete.emit(todo)">•</span>
    {{todo.todo}} <button class="btn__delete" (click)="delete.emit(todo)">&times;</button>
  `,
  styles: [`
    :host:hover .btn__delete {
      opacity: 1;
      visibility: visible;
    }
    .btn__delete {
      border: none;
      background: transparent;
      color: red;
      opacity: 0;
      visibility: hidden;
      transition: .75s ease-in-out 0s;
    }
    .check {
      color: red;
      cursor: pointer;
    }
    .check.completed {
      color: green;
    }
  `]
})
export class ListItemComponent implements OnInit {

  @Input() todo: TodoItem;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
