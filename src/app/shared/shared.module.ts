import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyoutComponent } from './flyout/flyout.component';
import { CheckComponent } from './check/check.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckComponent,
    FlyoutComponent,
    OverlayComponent,
  ],
  exports: [
    CheckComponent,
    FlyoutComponent,
    OverlayComponent,
  ]
})
export class SharedModule { }
