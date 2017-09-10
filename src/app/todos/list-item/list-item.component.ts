import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todos.models';

@Component({
  selector: 'app-list-item',
  styleUrls: ['list-item.component.scss'],
  template: `
    <div class="item" (click)="showDetails.emit(todo)">
      <i class="status" [class.completed]="todo.completed" (click)="complete.emit(todo); $event.stopPropagation();">
        <span class="mark">✔</span>
      </i>
      <p class="todo__title">{{todo.todo}}</p>
      <button class="btn__delete" (click)="toggleDelete();$event.stopPropagation()">&times;</button>
      <div class="item__delete" [class.show]="showDelete" (click)="delete.emit(todo)" (mouseout)="toggleDelete(false)">delete</div>
    </div>
  `,
})
export class ListItemComponent implements OnInit {

  @Input() todo: TodoItem;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();
  @Output() showDetails = new EventEmitter();

  showDelete = false;

  constructor() { }

  ngOnInit() {}

  toggleDelete(on?: boolean): void {
    if (typeof on === 'boolean') {
      this.showDelete = on;
      return;
    }

    this.showDelete = !this.showDelete;
  }
}
