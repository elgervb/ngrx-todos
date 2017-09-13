import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';

/**
 * Flyout component
 *
 * Note:
 * Calling module should have `schemas: [ CUSTOM_ELEMENTS_SCHEMA ]`,
 * as `app-flyout-header` tags are not known to it's module.
 *
 * @example:
 *```
 *  <app-flyout>
 *    <h1>SOme content</h1>
 *  </app-flyout>
 * ```
 */
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

      <ng-content></ng-content>
    </section>
  `
})
export class FlyoutComponent {

  @Input() fullHeight = true;
  @Input() centered = false;
  @Input() location: 'left'|'right' = 'left';
  @Input() css?: string;
  @Input() show = false;
  @Output() showChange = new EventEmitter();

  /* tslint:disable no-any the result can return anyting */
  result: Promise<any>;
  private resolve: (result?: any) => void;
  private reject: (reason?: any) => void;
  /* tslint:enable no-any */

  constructor() {
    this.createPromise();
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.dismiss('keydown.escape');
  }

  /* tslint:disable no-any the result can return anyting */
  close(result?: any): void {
  /* tslint:enable no-any */
    this.show = false;
    this.showChange.emit(this.show);
    this.resolve(result);
  }

  /* tslint:disable no-any the result can return anyting */
  dismiss(result?: any): void {
  /* tslint:enable no-any */
    this.show = false;
    this.showChange.emit(this.show);
    this.reject(result);
  }

  /* tslint:disable no-any the result can return anyting */
  open(): Promise<any> {
  /* tslint:enable no-any */
    this.show = true;
    this.showChange.emit(this.show);
    this.createPromise();

    return this.result;
  }

  private createPromise(): void {
    this.result = new Promise((resolve = () => {/* */}, reject = () => {/* */}) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

}
