import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flyout',
  styleUrls: ['flyout.component.scss'],
  template: `
    <section class="flyout" role="dialog" (click)="show=!show"
      *ngIf="true"
      [ngStyle]="css"
      [ngClass]="'flyout--'+location"
      [class.flyout--full-height]="fullHeight"
      [class.flyout--centered]="centered"
      [class.flyout--show]="show">

      <ng-content></ng-content>

      <p>Location: {{location}}</p>
      <p>Full height: {{fullHeight}}</p>
      <p>Show: {{show}}</p>
      <p>Custom styling: {{css | json}}</p>
    </section>
  `
})
export class FlyoutComponent {

  @Input() fullHeight = true;
  @Input() centered = false;
  @Input() location: 'left'|'right' = 'right';
  @Input() show = false;
  @Input() css?: string;

  public initialized = true;


  public open(): void {
    this.show = true;
  }
}
