import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-flyout',
  styleUrls: ['flyout.component.scss'],
  template: `
    <section class="flyout" role="dialog"
      *ngIf="true"
      [ngStyle]="css"
      [ngClass]="'flyout--'+location"
      [class.flyout--full-height]="fullHeight"
      [class.flyout--centered]="centered"
      [class.flyout--show]="show">

      <button class="btn--close" (click)="close()">&times;</button>

      <ng-content></ng-content>
    </section>
  `
})
export class FlyoutComponent {

  @Input() fullHeight = true;
  @Input() centered = false;
  @Input() location: 'left'|'right' = 'right';
  @Input() css?: string;
  @Input() show = false;
  @Output() showChange = new EventEmitter();

  public initialized = true;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
    this.close();
  }


  public close(): void {
    this.show = false;
    this.showChange.emit(this.show);
  }
  public open(): void {
    this.show = true;
    this.showChange.emit(this.show);
  }
  public toggle(): void {
    this.show = !this.show;
    this.showChange.emit(this.show);
  }

}
