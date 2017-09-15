import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  template: `
    <div class="overlay"
      [class.show]="show"
      [ngClass]="'effect--'+effect"
    ></div>
  `,
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() show = false;
  @Input() effect = 'appear' || 'slide-in-right' || 'slide-in-left'
    || 'slide-in-top' || 'slide-in-bottom' || 'zoom-in' || 'expand'
    || 'genie' || 'test';

  constructor() { }

  ngOnInit() {
  }

}
