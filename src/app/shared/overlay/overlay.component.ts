import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  template: `
    <div class="overlay"
      [class.show]="show"
    ></div>
  `,
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

}
