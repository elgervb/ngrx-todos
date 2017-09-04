import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-form',
  template: `
    <form (ngSubmit)="itemAdded.emit(todo)">
      <input type="text" name="todo" [(ngModel)]="todo" />
      <button>+</button>
    </form>
  `,
  styles: []
})
export class ItemFormComponent implements OnInit {

  @Output() itemAdded = new EventEmitter();
  todo: string;

  constructor() { }

  ngOnInit() { }
}
