import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  styleUrls: ['check.component.scss'],
  template: `
  <i class="check" [class.checked]="checked" (click)="check(); $event.stopPropagation();">
    <span class="mark">✔</span>
  </i>
  `,
})
export class CheckComponent implements OnInit {

  @Input() checked = false;
  @Output() checkedChanged = new EventEmitter();

  @Output() onChecked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  check(): void {
    this.checked = !this.checked;
    this.onChecked.emit(this.checked);
    this.checkedChanged.emit(this.checked);
  }

}
