import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyoutComponent } from './flyout/flyout.component';
import { CheckComponent } from './check/check.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckComponent,
    FlyoutComponent,
  ],
  exports: [
    CheckComponent,
    FlyoutComponent,
  ]
})
export class SharedModule { }
