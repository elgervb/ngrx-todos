import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyoutComponent } from './flyout/flyout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlyoutComponent
  ],
  exports: [
    FlyoutComponent
  ]
})
export class SharedModule { }
