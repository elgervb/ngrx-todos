import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-form',
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <input type="text" name="todo" [(ngModel)]="todo" required autocomplete="off"/>
      <button [disabled]="form.invalid">+</button>
    </form>
  `,
  styles: [`
    button[disabled] {
      opacity: .4;
    }
  `]
})
export class ItemFormComponent {

  @Output() itemAdded = new EventEmitter();
  todo: string;

  onSubmit(): void {
    this.itemAdded.emit(this.todo);

    this.todo = null;
  }
}
