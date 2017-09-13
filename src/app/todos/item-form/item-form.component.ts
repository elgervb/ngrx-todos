import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-form',
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <input type="text" name="todo" [(ngModel)]="todo" required autocomplete="off" placeholder="Add todo here..."/>
      <button [hidden]="true" [disabled]="form.invalid">+</button>
    </form>
  `,
  styleUrls: [ 'item-form.component.scss' ]
})
export class ItemFormComponent {

  @Output() itemAdded = new EventEmitter();
  todo: string;

  onSubmit(): void {
    this.itemAdded.emit(this.todo);

    this.todo = null;
  }
}
