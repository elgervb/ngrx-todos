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
 *    <app-flyout-header>
 *      <button class="flyout__close">&times;</button>
 *    </app-flyout-header>
 *    <app-flyout-body>
 *      <h1> here comes title</h1>
 *      <p>Further flyout body</p>
 *    </app-flyout-body>
 *    <flyout__footer>
 *      <div class="buttons">
 *        <button class="flyout__close">Close flyout</button>
 *      </div>
 *    </flyout__footer>
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

    <header class="flyout__header">
      <ng-content select="app-flyout-header"></ng-content>
    </header>

    <main class="flyout__body">
      <ng-content select="app-flyout-body"></ng-content>
    </main>

    <footer class="flyout__footer">
      <ng-content select="app-flyout-footer"></ng-content>
    </footer>

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
