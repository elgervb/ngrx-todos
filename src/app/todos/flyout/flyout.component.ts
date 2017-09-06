import { AfterViewChecked, Component, ElementRef, Input, Renderer } from '@angular/core';

@Component({
  selector: 'app-flyout',
  template: `
    <section class="flyout" (click)="show=!show"
      [ngClass]="'flyout--'+location"
      [class.flyout--full-height]="fullHeight"
      [class.flyout--centered]="centered"
      [class.flyout--show]="show">
      <ng-content></ng-content>

      <p>Location: {{location}}</p>
      <p>Full height: {{fullHeight}}</p>
      <p>Show: {{show}}</p>
    </section>
  `,
  styleUrls: ['flyout.component.scss']
})
export class FlyoutComponent implements AfterViewChecked {

@Input() fullHeight = true;
@Input() centered = false;
@Input() location: 'left'|'right' = 'right';
@Input() show = false;

constructor(private element: ElementRef, private renderer: Renderer) {}

  public ngAfterViewChecked(): void {
    this.renderer.setElementClass(this.element.nativeElement, 'flyout--initialized', true);
  }
}
